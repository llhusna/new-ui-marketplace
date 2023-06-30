import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { images } from "../constant";
import { HiPlusSm } from "react-icons/hi";
import useIpfsFactory from "../hooks/useIpfsFactory";
import { useWallet } from "../hooks/useWallet";

export const CreateMultiple = () => {
  const [showModal, setShowModal] = useState(false);
  const [royalty, setRoyalty] = useState(0);
  const [copy, setCopy] = useState(1);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [isModalApproved, setIsModalApproved] = useState(false);

  //properties state
  const [properties, setProperties] = useState([]);
  const [property1, setProperty1] = useState("");
  const [property2, setProperty2] = useState("");

  const handleChangeProperty1 = (event) => {
    setProperty1(event.target.value);
  };

  const handleChangeProperty2 = (event) => {
    setProperty2(event.target.value);
  };

  const addProperty = (e) => {
    e.preventDefault();

    const newProperty = { property1, property2 };
    setProperties([...properties, newProperty]);
    setProperty1("");
    setProperty2("");
  };

  const deleteProperty = (index) => {
    const newProperties = [...properties];
    newProperties.splice(index, 1);
    setProperties(newProperties);
  };

  //lock state
  const [onLock, setOnLock] = useState(false);

  //sale modal state
  const [onSale, setOnSale] = useState(false);
  const [salePrice, setSalePrice] = useState(0);

  //metadata state
  const [metadata, setMetadata] = useState({
    title: "",
    description: "",
    media: "",
    perpetual_royalties: {},
    category: "",
    amount: {},
  });

  const [preview, setPreview] = useState();

  const { ipfs, upload } = useIpfsFactory();
  const { accountId, callMethod, viewMethod } = useWallet();

  const onHandleChanged = (evt) => {
    const value = evt.target.value;
    setMetadata({
      ...metadata,
      [evt.target.name]: value,
    });
  };

  //select option
  const selectCategory = [
    {
      value: "",
      label: "Select category",
    },
    {
      value: "collectibles",
      label: "Collectibles",
    },
    {
      value: "membership",
      label: "Membership",
    },
    {
      value: "ticketing",
      label: "Ticketing",
    },
    {
      value: "animation",
      label: "Animation",
    },
    {
      value: "arts",
      label: "Arts",
    },
    {
      value: "Irl art",
      label: "Irl art",
    },
    {
      value: "trading",
      label: "Trading Cards",
    },
    {
      value: "memes",
      label: "Memes",
    },
    {
      value: "music",
      label: "Music",
    },
  ];

  //checkbox logic for onSale and onAuction
  const [checkbox1, setCheckbox1] = useState(false);

  const onHandleSaleChanged = (event) => {
    setCheckbox1(event.target.checked);

    setOnSale(true);

    if (checkbox1 === true) {
      setOnSale(false);
    }
  };

  const onHandleLockChanged = () => {
    setOnLock(!onLock);
  };

  //image & preview logic
  const [image, setImage] = useState();

  const onFileChanged = (e) => {
    setImage(e.target.files[0]);
  };

  const imageRef = useRef(null);

  const onOpenFileDialog = (e) => {
    imageRef.current.click();
  };

  useEffect(() => {
    if (!image) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

  //check approved creator
  const [isApproved, setIsApproved] = useState(false);

  const getApprovalStatus = async () => {
    const res = await viewMethod(
      process.env.CONTRACT_SERIES_NAME,
      "is_approved_creator",
      { account_id: accountId }
    );
    setIsApproved(res);
  };

  useEffect(() => {
    if (accountId) {
      getApprovalStatus();
    }
  }, [accountId, isApproved, getApprovalStatus]);

  //add approve creator
  const [addApproval, setAddApproval] = useState();

  const getApprovalCreator = async () => {
    const args = {
      account_id: accountId,
    };

    console.log(args);

    await callMethod({
      contractId: process.env.CONTRACT_SERIES_NAME,
      method: "add_approved_creator",
      args,
    });
  };

  //submit function logic only for creation
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const cid = await ipfs.add(image);
      if (cid.path) {
        setMetadata({
          ...metadata,
          media: `${process.env.INFURA_GATEWAY}/${cid.path}`,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  // upload
  useEffect(() => {
    if (metadata.media) {
      const meta = {
        ...metadata,
      };

      meta.perpetual_royalties[`${accountId}`] = royalty;
      meta.amount = copy;

      const args = {
        id: parseInt(Date.now(), 10),
        /* token_id: `${Date.now()}`, */
        metadata: meta,
        receiver_id: accountId,
      };

      console.log(args);

      callMethod({
        contractId: process.env.CONTRACT_SERIES_NAME,
        method: "create_series",
        args,
      }).then(() => setMetadata());
    }
  }, [metadata]);

  const onSubmitOnSale = async (e) => {
    e.preventDefault();

    try {
      const cid = await ipfs.add(image);
      if (cid.path) {
        console.log(cid);
        // add cid
        setMetadata({
          ...metadata,
          media: `${process.env.INFURA_GATEWAY}/${cid.path}`,
        });

        setOnSale({
          onSale,
        });

        // add royalty
        const meta = {
          ...metadata,
        };

        meta.perpetual_royalties[`${accountId}`] = royalty;
        meta.amount = copy;

        const args = {
          token_id: `${Date.now()}`,
          metadata: meta,
          receiver_id: accountId,
        };

        console.log(args);

        await callMethod({
          contractId: process.env.CONTRACT_SERIES_NAME,
          method: "nft_mint",
          args,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="body-container">
        {showModal ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto py-20 mb-10">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-90"
                onClick={() => setShowModal(false)}
              ></div>
              <div className="flex relative justify-center min-h-screen px-4 py-8">
                <div className="absolute w-full max-w-xl mx-auto bg-createnft z-99 rounded-md border-[1px] border-red-600">
                  <div className="mt-16 px-10 flex flex-col justify-center text-white">
                    <h4 className="text-2xl text-center font-semibold pb-10">
                      ERC1155 Collection
                    </h4>

                    <div className="flex flex-col gap-y-6 text-xs">
                      <div className="">
                        <div className="pb-4">Logo image</div>
                        <div className="border-dashed border-2 border-red-600 rounded-[100%] w-24">
                          <img src={images.uploadcreation} className="py-8 px-9 translate-x-0"/>
                        </div>
                      </div>
                      <div className="pt-6">
                        <span className="font-semibold">Banner image</span><br/>
                        <span>This image will appear on top of your collection page.</span>
                        <div className='flex justify-center my-2 text-center text-gray-400 text-sm p-6 border-dashed border-2 border-red-700 rounded-md relative'>
                            <div>
                                <input
                                ref={imageRef}
                                id="image"
                                accept="image/*"
                                type="file"
                                onChange={onFileChanged}
                                style={{ display: "none" }}
                                />
                                <img
                                onClick={onOpenFileDialog}
                                type="file"
                                className="py-4 w-5 cursor-pointer"
                                src={images.uploadcreation}
                                >
                                </img>
                            </div>
                        </div>
                      </div>
                     

                      <label>
                        Name
                        <div>
                          <input
                          name="title"
                          value={metadata.title}
                          onChange={onHandleChanged}
                          className="bg-[#000000] border-[0.5px] border-gray-400 outline-none focus:border-[1px] focus:border-red-600 h-10 w-full rounded-md mt-2 text-xs"
                          placeholder="Name your creation"
                          style={{ padding: "20px" }}
                        />
                        </div>
                      </label>

                      <label>
                        Symbol
                        <div>
                          <input
                            type="search"
                            name="search-form"
                            id="search-form"
                            className="bg-[#000000] border-[0.5px] border-gray-400 outline-none focus:border-[1px] focus:border-red-600 h-10 w-full rounded-md mt-2 text-xs"
                            placeholder="Enter symbol"
                            style={{ padding: "20px" }}
                          />
                        </div>
                      </label>

                      <label>
                        Description
                        <div>
                            <textarea
                                type="text"
                                name="description"
                                value={metadata.description}
                                onChange={onHandleChanged}
                                className="bg-[#000000] border-[0.5px] border-gray-400  outline-none focus:border-[1px] focus:border-red-600 w-full rounded-md mt-2 text-xs h-[150px]"
                                placeholder="Describe your NFT item and any unlockable content.
                                E.g. Physical print unlocked with purchase."
                                style={{ padding:"20px"}}
                            />
                        </div>
                      </label>

                      <label>
                        Links
                        <div>
                            <div className="relative">
                              <div
                                className="pl-4 pr-3 absolute inset-y-0 top-2 left-0 flex items-center cursor-pointer"
                              >
                                <img
                                  alt="twitter"
                                  src={images.twitter}
                                  className="w-5 mr-1"
                                />
                              </div>
                              <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="bg-[#000000] border-[0.5px] border-gray-400 outline-none focus:border-[1px] focus:border-red-600 h-10 w-full rounded-md mt-2 text-xs "
                                placeholder="Your site"
                                style={{ padding: "20px 50px" }}
                              />
                            </div>

                            <div className="relative">
                              <div
                                className="pl-4 pr-3 absolute inset-y-0 top-2 left-0 flex items-center cursor-pointer"
                              >
                                <img
                                  alt="twitter"
                                  src={images.twitter}
                                  className="w-5 mr-1"
                                />
                              </div>
                              <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="bg-[#000000] border-[0.5px] border-gray-400 outline-none focus:border-[1px] focus:border-red-600 h-10 w-full rounded-md mt-2 text-xs"
                                placeholder="Twitter"
                                style={{ padding: "20px 50px" }}
                              />
                            </div>

                            <div className="relative">
                              <div
                                className="pl-4 pr-3 absolute inset-y-0 top-2 left-0 flex items-center cursor-pointer"
                              >
                                <img
                                  alt="twitter"
                                  src={images.discord}
                                  className="w-5 mr-1"
                                />
                              </div>
                              <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="bg-[#000000] border-[0.5px] border-gray-400 outline-none focus:border-[1px] focus:border-red-600 h-10 w-full rounded-md mt-2 text-xs"
                                placeholder="Discord"
                                style={{ padding: "20px 50px" }}
                              />
                            </div>

                        </div>
                      </label>

                      <label>
                        Short url
                        <div>
                          <input
                            type="search"
                            name="search-form"
                            id="search-form"
                            className="bg-[#000000] border-[0.5px] border-gray-400 outline-none focus:border-[1px] focus:border-red-600 h-10 w-full rounded-md mt-2 text-xs"
                            placeholder="Short-url"
                            style={{ padding: "20px" }}
                          />
                        </div>
                      </label>
                    </div>

                    <div className="flex grid grid-cols-2 justify-center my-10 gap-x-4 mx-20 text-sm">
                      <div className="items-center gap-2 mt-3 sm:flex">
                        <button
                          className="w-full mt-2 p-2.5 flex-1 text-black bg-white hover:ring-offset-2 hover:ring-orange-600 hover:ring-2"
                          onClick={() => setShowModal(false)}
                        >
                          Create Collection
                        </button>
                      </div>
                      <div className="items-center gap-2 mt-3 sm:flex">
                        <button
                          className="w-full mt-2 p-2.5 flex-1 text-white bg-transparent ring-2 ring-white hover:ring-red-600 hover:ring-2"
                          onClick={() => setShowModal(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}

        {/* Modal to check approved creator, add creator, and create series */}
        {showModalConfirm ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShowModalConfirm(false)}
              ></div>
              <div className="flex relative justify-center items-center min-h-screen mt-40 px-4 py-8">
                <div className="absolute w-full max-w-lg mx-auto bg-gray-100 z-99 rounded-md shadow-lg">
                  <div className="my-4 py-10 flex flex-col justify-center text-black">
                    <div className="text-3xl text-center font-bold pb-10 text-gray-800">
                      Confirmation
                    </div>
                    {isApproved ? (
                      <div className="text-md text-center font-bold pb-4 text-gray-800">
                        Approve
                      </div>
                    ) : (
                      <div>
                        <div className="text-md text-center font-bold pb-4 text-gray-800">
                          Only approved creator is allow to create series.
                          <br /> Want to be an approved creator ?
                        </div>
                        <div className="flex justify-center gap-x-6">
                          <button onClick={getApprovalCreator}>Yes</button>
                          <button onClick={() => setShowModalConfirm(false)}>
                            No
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="text-md text-center font-bold mt-10 py-4 text-gray-800">
                      Confirm your transaction on Near to create series ?
                    </div>

                    {isApproved ? (
                      <div className="flex justify-center gap-x-6">
                        <button onClick={onSubmit}>Confirm</button>
                        <button onClick={() => setShowModalConfirm(false)}>
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-center gap-x-6">
                        <button
                          disabled
                          className="opacity-50 cursor-not-allowed"
                        >
                          Confirm
                        </button>
                        <button
                          disabled
                          className="opacity-50 cursor-not-allowed"
                          onClick={() => setShowModalConfirm(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}

        <div className="grid grid-cols-2 md:grid-cols-4 py-10 lg:py-20 gap-x-10 lg:ml-36 lg:mr-28">
          <div className="col-span-4 lg:col-span-2">
            <div className='flex items-center justify-between'>
              <div className='text-3xl font-semibold'>Create Multiple Collectibles</div>
              <Link
                  className='text-sm border-[1px] border-[#373737] px-4 py-2 rounded-md'
                  to="/create/nft"
              >
                  Switch to Single
              </Link>
            </div>
            
            {/* upload nft section */}
            { !preview ?
                <div className='my-6 text-center text-gray-400 text-sm p-6 border-dashed border-[1px] border-red-700 rounded-xl h-[500px] relative'>
                    <div className='translate-y-40'>
                        <div className='flex justify-center'>
                            <div>
                                <input
                                ref={imageRef}
                                id="image"
                                accept="image/*"
                                type="file"
                                onChange={onFileChanged}
                                style={{ display: "none" }}
                                />
                                <img
                                onClick={onOpenFileDialog}
                                type="file"
                                className="py-4 cursor-pointer"
                                src={images.uploadcreation}
                                >
                                </img>
                            </div>
                        </div>
                        <span>JPG, PNG, GIF, WEBP, MP3, WAV, MP4, GLTF, GLB or VOX. Max size 30mb.</span>
                    </div>
                </div>
                :
                <div className='my-6 text-center text-gray-400 text-sm border-dashed border-[1px] border-red-700 rounded-xl h-[500px] relative'>
                    <div className='bg-white rounded-xl h-full relative'>
                        <img src={preview} alt="" className='object-cover h-full rounded-xl' />
                    </div>
                </div>
                }


            {/* onSale section */}
            <div className='text-3xl font-semibold pb-2'>Put on sale</div>
                  <div className="grid grid-cols-1 py-6 px-6 bg-white text-black my-4 border-[1px] border-orange-600 rounded-lg">
                      <div className="flex justify-end w-full mb-2 pb-2">
                          <label className="flex items-center cursor-pointer">
                                  <div className="relative">
                                      <input 
                                          type="checkbox"
                                          value={onSale}
                                          onChange={onHandleSaleChanged}
                                          /* onClick={e => setOnSale(!onSale)} */
                                          checked={checkbox1}
                                          className="sr-only" 
                                      />
                                      <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                                      <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                                  </div>             
                          </label>
                      </div>
                      { onSale === true && onAuction === false ?
                          <>
                              <div className="col-span-4 lg:col-span-2 mx-4">
                                  <label className='font-semibold'>
                                      Enter the price in ETH for one item.
                                          <div className='gap-4 mt-2'>
                                              <input
                                                  type="number"
                                                  name="salePrice"
                                                  className="bg-[#f4f5f7] border-[1px] border-orange-600 h-10 w-full rounded-lg text-black focus:outline-none" 
                                                  value={salePrice}
                                                  onChange={e => setSalePrice(e.target.value)}
                                                  style={{ padding:"20px"}}
                                              />
                                              <div className='text-xs font-light pt-2'>
                                                  Platform Fee: 0% <br/>
                                                  You will receive Ξ 0.0001 (~$0.125)
                                              </div>   
                                          </div>
                                  </label>
                              </div>
                              <div className='flex justify-center pt-10'>
                                  <button onClick={onSubmitOnSale} className='mt-6 px-16 py-4 my-10'>Put on Sale</button>
                              </div>
                          </>
                              : 
                          <div className='text-sm text-gray-500 py-10'>Item will be put on sale and made available on the marketplace.</div>
                      }
                  </div>
            </div>


            {/* input form section */}
            <div className="col-span-4 lg:col-span-2 w-full">
                <form onSubmit={e => { handleSubmit(e) }}>
                    <div className='pt-12'>
                        <div>Collection</div>
                        <div className='grid bg-[#242424] bg-opacity-80 text-xs py-8 px-8 rounded-md mt-2'>
                            <span>This is the collection where your item will appear. Select an existing collection or create a new collection.</span>
                            <div className='flex gap-x-6 pt-4 items-center'>
                                <div className="cursor-pointer" onClick={() => setShowModal(true)}>
                                  <img className="w-6" src={images.addcollection}></img>
                                </div>
                                <div>3six9 NFT (default)</div>
                            </div>
                        </div>
                    </div>

                    <div className='pt-12'>
                        <div>Creation Details</div>
                        <div className="relative grid bg-[#242424] bg-opacity-80 text-xs py-8 px-8 rounded-md mt-2">
                            <div className="flex flex-col gap-y-6 text-sm">
                                <label>
                                    Name
                                    <div>
                                        <input
                                            name="title"
                                            value={metadata.title}
                                            onChange={onHandleChanged}
                                            className="bg-[#373737] border-[1px] border-gray-400 outline-none focus:border-[1px] focus:border-red-600 h-10 w-full rounded-md mt-2 text-xs"
                                            placeholder="Name your artwork"
                                            style={{ padding:"20px"}}
                                        />
                                    </div>
                                </label>

                                <label>
                                    Description
                                    <div>
                                        <textarea
                                            type="text"
                                            name="description"
                                            value={metadata.description}
                                            onChange={onHandleChanged}
                                            className="bg-[#373737] border-[1px] border-gray-400  outline-none focus:border-[1px] focus:border-red-600 w-full rounded-md mt-2 text-xs h-[150px]"
                                            placeholder="Describe your NFT item and any unlockable content.
                                            E.g. Physical print unlocked with purchase."
                                            style={{ padding:"20px"}}
                                        />
                                    </div>
                                </label>
                               
                              <div className="flex gap-4 mt-2">
                                <label>
                                  Royalties
                                  <input
                                    type="number"
                                    name="royalty"
                                    onChange={(e) => setRoyalty(e.target.value)}
                                    className="bg-[#373737] border-[1px] border-gray-400 outline-none focus:border-[1px] focus:border-red-600 h-10 w-full rounded-md"
                                    style={{ padding: "20px" }}
                                  />
                                </label>
                                <label>
                                  Number of copies
                                  <input
                                    type="number"
                                    name="copy"
                                    onChange={(e) => setCopy(e.target.value)}
                                    className="bg-[#373737] border-[1px] border-gray-400 outline-none focus:border-[1px] focus:border-red-600 h-10 w-full rounded-md"
                                    style={{ padding: "20px" }}
                                  />
                                </label>
                              </div>

                                <label>
                                    <div className='flex justify-between items-center pb-2'>
                                        <span>Unlockable Content</span>
                                        <div className="cursor-pointer">
                                            <div className="relative">
                                                <input 
                                                    type="checkbox"
                                                    value={onLock}
                                                    onClick={onHandleLockChanged}
                                                    className="sr-only" 
                                                />

                                                <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                                                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                                            </div>             
                                        </div>
                                    </div>                
                                
                                <div className='rounded-md px-4 py-6 bg-[#373737] border-[1px] border-gray-400 outline-none focus:border-[1px] focus:border-red-600  w-full'>
                                { onLock ?
                                <>
                                    <div className='text-gray-400 text-xs'>Provide the Links of the content which buyer can download, post purchase</div>
                                        <div className='mt-4'>
                                            <input
                                                type="text"
                                                name="externallink"
                                                className="h-20 w-full text-sm font-normal px-4 outline-orange-600 rounded-md mt-2 border-[1px] border-gray-200"
                                                placeholder="Tip: Markdown syntax is supported"
                                            />
                                    </div>
                                </>
                                :
                                <div className='text-xs text-gray-400'>Include unlockable content that will be revealed to the buyers after transaction. </div>
                                }
                                </div>
                                </label>  

                                <label>
                                    Category
                                    <select
                                            name="category"
                                            value={metadata.category}
                                            onChange={onHandleChanged}
                                            className="bg-[#373737] border-[1px] border-gray-400 outline-none focus:border-[1px] focus:border-red-600 h-10 w-full rounded-md mt-2 text-xs"
                                            style={{ padding:" 0 20px"}}
                                            >
                                            {selectCategory.map((option, i) => {
                                                return (
                                                <option value={option.value} key={i} >
                                                    {option.label}
                                                </option>
                                                );
                                            })}
                                    </select>
                                </label>

                                <label>
                                    Properties
                                    <div>
                                    
                                    {properties.map((property, index) => (
                                            <div className='flex gap-4 mt-2' key={index}>
                                            <input
                                                    type="text"
                                                    name="property1"
                                                    value={property.property1}
                                                    className="bg-[#373737] border-[1px] border-gray-400 outline-none focus:border-[1px] focus:border-red-600 h-10 w-full rounded-md text-xs"
                                                    style={{ padding:"20px"}}
                                                    />
                                                <input
                                                    type="text"
                                                    name="property2"
                                                    value={property.property2}
                                                    className="bg-[#373737] border-[1px] border-gray-400 outline-none focus:border-[1px] focus:border-red-600 h-10 w-full rounded-md text-xs"
                                                    style={{ padding:"20px"}}
                                                    />
                                            
                                            <button onClick={() => deleteProperty(index)}>
                                                <img src={images.deleteInput} className="w-[80px] h-[20px] bg-[#393D5D]" />
                                            </button>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='flex gap-4 mt-2'>
                                        <input
                                            type="text"
                                            name="property1"
                                            value={metadata.property1}
                                            onChange={handleChangeProperty1}
                                            className="bg-[#373737] border-[1px] border-gray-400 outline-none focus:border-[1px] focus:border-red-600 h-10 w-full rounded-md text-xs"
                                            placeholder="E.g. Dimension"
                                            style={{ padding:"20px"}}
                                            />
                                        <input
                                            type="text"
                                            name="property2"
                                            value={metadata.property2}
                                            onChange={handleChangeProperty2}
                                            className="bg-[#373737] border-[1px] border-gray-400 focus:border-[1px] focus:border-red-600 outline-none h-10 w-full rounded-md text-xs"
                                            placeholder="E.g. 1200px x 2000px"
                                            style={{ padding:"20px"}}
                                            />
                                        
                                        <button className='px-4 text-lg bg-[#393D5D]' onClick={addProperty}>+</button>
                                    </div>
                                </label>


                               {/*  <div className="flex justify-between w-full mb-2">
                                    <div className="text-gray-400 font-semibold text-md">
                                    Put on Auction
                                    </div>

                                    <label className="flex items-center cursor-pointer">
                                        <div className="relative">
                                            <input 
                                                type="checkbox"
                                                value={onAuction}
                                                onChange={onHandleAuctionChanged}
                                                checked={checkbox2}
                                                className="sr-only" 
                                            />

                                            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                                            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                                        </div>             
                                    </label>
                                </div> */}

                                { onSale === false ?
                                    <div className='flex flex-col md:col-span-2 my-2'>
                                        <button
                                            type="button"
                                            onClick={onSubmit}
                                            className='py-6 border-2 border-orange-600 bg-white text-black text-lg'
                                        >
                                            Create
                                        </button>
                                    </div>
                                :
                                    <></>
                                }
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>

       

        {/* onSale modal */}
        {onSale ? (
          <div className="grid grid-cols-1 py-14 mx-6 lg:mx-28 px-16 bg-[#f4f5f7] text-black my-10 rounded-xl">
            <div className="col-span-4 lg:col-span-2">
              <div className="text-4xl font-semibold pb-2">Put on sale</div>
              <label>
                Enter the price in ETH for one item.
                <div className="flex gap-4 mt-2 items-center">
                  <input
                    type="number"
                    name="salePrice"
                    className="bg-[#f4f5f7] border-[1px] border-orange-600 h-10 w-1/2 rounded-lg text-black focus:outline-none"
                    value={salePrice}
                    onChange={(e) => setSalePrice(e.target.value)}
                    style={{ padding: "20px" }}
                  />
                  <div className="text-xs font-light">
                    Platform Fee: 0% <br />
                    You will receive Ξ 0.0001 (~$0.125)
                  </div>
                </div>
              </label>
            </div>
            <div className="flex justify-center pt-10">
              <button
                onClick={onSubmitOnSale}
                className="mt-6 px-28 py-6 button-glass font-semibold"
              >
                Put on Sale
              </button>
            </div>
          </div>
        ) : null}
      </div>

    </>
  );
};


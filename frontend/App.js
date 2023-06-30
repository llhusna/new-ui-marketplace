import "regenerator-runtime/runtime";
import React, { useEffect, useState } from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Activity from "./pages/Activity";
import Auctions from "./pages/Auctions";
import SingleAuction from "./pages/SingleNFTAuction";
import Marketplace from "./pages/Marketplace";
import { CreateSingle } from "./pages/CreateSingle";
import { CreateMultiple } from "./pages/CreateMultiple";

import "./assets/global.css";

import Footer from "./components/Container/Footer";
import { MainProfile } from "./pages/MainProfile";
import { NavProfile } from "./pages/NavProfile";
import { CreateCollectible } from "./pages/CreateCollectible";
import { SingleNFTMarketplace } from "./pages/SingleNFTMarketplace";
import { UpdateProfile } from "./pages/UpdateProfile";
import { HeaderLayout } from "./components/Layout/HeaderLayout";
import useIpfsFactory from "./hooks/useIpfsFactory";
import { MarketplaceCollection } from "./pages/MarketplaceCollection";
import { AuctionCollection } from "./pages/AuctionCollection";
import { SingleCreation } from "./pages/SingleCreation";
import MyBids from "./pages/MyBids";
import FAQs from "./pages/FAQs";
import { SingleCollectible } from "./pages/SingleCollectible";
import { StatsDashboard } from "./pages/StatsDashboard";
import { TestSale } from "./pages/TestSale";
import { NewSingleNFTMarketplace } from "./pages/NewSingleNFTMarketplace";
import NewMarketplace from "./pages/NewMarketplace";
import { NewMarketplaceCollection } from "./pages/NewMarketplaceCollection";

export default function App() {
  const { ipfs, ipfsInitError } = useIpfsFactory();
  // const id = useIpfs(ipfs, 'id')
  const [version, setVersion] = useState();

  useEffect(() => {
    if (!ipfs) return;

    const getVersion = async () => {
      const nodeId = await ipfs.version();
      setVersion(nodeId);
    };

    getVersion();
  }, [ipfs]);

  return (
    <>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route index path="/" element={<Landing />} />

          <Route exact path="marketplace">
            <Route index element={<Marketplace />} />
            <Route path=":contract_id/:id" element={<SingleNFTMarketplace />} />
          </Route>

          <Route exact path="newmarketplace">
            <Route index element={<NewMarketplace />} />
            <Route path=":id" element={<NewSingleNFTMarketplace/>} />
          </Route>


          <Route strict exact path="activity" element={<Activity />} />

          <Route strict exact path="dashboard" element={<StatsDashboard/>}/>

          <Route exact path="auctions">
            <Route index element={<Auctions />} />
            <Route path=":id" element={<SingleAuction />} />
          </Route>

          <Route exact path="profile">
            <Route index element={<MainProfile />} />
            <Route path=":id" element={<NavProfile />} />
          </Route>

          <Route exact path="collection">
            <Route path=":id" element={<MarketplaceCollection />} />
          </Route>

          <Route exact path="newcollection">
            <Route path=":id" element={<NewMarketplaceCollection />} />
          </Route>

          <Route exact path="collectible">
            <Route path=":id" element={<SingleCollectible />} />
          </Route>

          <Route path="auction/:id" element={<AuctionCollection />} />

          {/* <Route path="creation" element={<SingleCreation />} /> */}
          <Route exact path="creation">
            <Route path=":id" element={<SingleCreation />} />
          </Route>

          <Route exact index path="create" element={<CreateCollectible />} />
          <Route exact path="create/nft" element={<CreateSingle />} />
          <Route
            exact
            path="create/:id/multiple"
            element={<CreateMultiple />}
          />
          
          <Route exact path="updateprofile" element={<UpdateProfile />} />
          <Route exact path="mybids" element={<MyBids />} />
          <Route exact path="faqs" element={<FAQs />} />
        </Route>
      </Routes>

      {location.pathname == "/" && <Footer />}
    </>
  );
}

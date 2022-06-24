
import Whyus from "../components/Whyus";
import Service from "../components/Service";
import Call from "../components/Call";
import Features from "../components/Features";
import Posts from "../components/Posts";
import Banner from "../components/Banner";
 function Home(){
    return(
        <div>
          <Banner />
        <Whyus/>
      <Service/>
      <Call/>
      <Features/>
      <Posts/>
      </div>
    )
}
export default Home
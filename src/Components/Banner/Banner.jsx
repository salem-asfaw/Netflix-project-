 import styles from "./Banner.module.css";
import logo from "../../assets/Image/image/logo.png";
import { Play, Info } from "lucide-react";
import { MovieInstance } from "../../Utility/MovieInstance";
import requests from "../../Utility/requestUrl";
import { useEffect, useState } from "react";

const BANNER_BASE = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [bannerImage, setBannerImage] = useState({});

  useEffect(() => {
    async function fetchBannerImage() {
      const request = await MovieInstance.get(
        requests.fetchNetflixOriginals
      );

      setBannerImage(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }

    fetchBannerImage();
  }, []);

  function truncate(str, num) {  // this opreatr called ternay operater
    return str?.length > num ? str.substr(0, num - 1) + "..." : str;
  }

  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: bannerImage?.backdrop_path
          ? `url("${BANNER_BASE}${bannerImage.backdrop_path}")`
          : "none",
        backgroundSize: "cover",
      }}
    >
      <div className={styles.contents}>
        {/* netflix logo */}
        <img className={styles.logoImg} src={logo} alt="" />

        {/* title */}
        <h1 className={styles.title}>
          {bannerImage?.original_name}
        </h1>

        {/* description */}
        <h1 className={styles.description}>
          {truncate(bannerImage?.overview, 120)}
        </h1>

        {/* buttons */}
        <div className={styles.buttonContainer}>
          <button className={styles.buttom}>
            <Play size={30} />
            Play
          </button>

          <button className={styles.buttom}>
            <Info size={30} />
            My List
          </button>
        </div>
      </div>

      {/* fading */}
      <div className={styles.fadeBottom}></div>
    </div>
  );
}

export default Banner;
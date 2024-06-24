import Image from "next/image";
import React from "react";
import Flash from "../../../../public/images/flash.svg";
import Fubar from "../../../../public/images/fubar.svg";
import Manifest from "../../../../public/images/manivest.svg";
import Silo from "../../../../public/images/silo.svg";
import Covenant from "../../../../public/images/covenant.svg";
import Shark from "../../../../public/images/shark.svg";
import BlackNight from "../../../../public/images/blackNight.svg";
import bookClub from "../../../../public/images/bookClub.svg";
import dropsOfGod from "../../../../public/images/dropsOfGod.svg";
import fastX from "../../../../public/images/fastX.svg";
import ghosted from "../../../../public/images/ghosted.svg";
import guadrians from "../../../../public/images/guadrians.svg";
import hypnotic from "../../../../public/images/hypnotic.svg";
import january6 from "../../../../public/images/january6.svg";
import johnWick from "../../../../public/images/johnWick.svg";
import loveAgain from "../../../../public/images/loveAgain.svg";
import modeling from "../../../../public/images/modeling.svg";
import nightAgent from "../../../../public/images/nightAgent.svg";
import paint from "../../../../public/images/paint.svg";
import robots from "../../../../public/images/robots.svg";
import silo2 from "../../../../public/images/silo2.svg";
import sisu from "../../../../public/images/sisu.svg";
import theMother from "../../../../public/images/theMother.svg";
import turbo from "../../../../public/images/turbo.svg";
import arrow from "../../../../public/images/arrow.svg";
import clock2 from "../../../../public/images/clock2.svg";
import "./style.css";

export default function Carousel() {
  return (
    <div className="card__container">
      <div className="card__h3">
        <h3>Recently Updated</h3>
      </div>
      <div className="main__card">
        <div className="card">
          <Image src={Flash} width={63} height={103} alt="flash" />
          <div>
            <h4>The flash</h4>
            <h4>Series/S 2/EP 9</h4>
            <h4>11/05/23</h4>
          </div>
        </div>
        <div className="card">
          <Image src={Fubar} width={63} height={103} alt="fubar" />
          <div>
            <h4>Fubar</h4>
            <h4>Series/S 2/EP 9</h4>
            <h4>11/05/23</h4>
          </div>
        </div>
        <div className="card">
          <Image src={Manifest} width={63} height={103} alt="manifest" />
          <div>
            <h4>Manifest</h4>
            <h4>Series/S 2/EP 9</h4>
            <h4>11/05/23</h4>
          </div>
        </div>
        <div className="card">
          <Image src={Silo} width={63} height={103} alt="silo" />
          <div>
            <h4>Silo</h4>
            <h4>Series/S 2/EP 9</h4>
            <h4>11/05/23</h4>
          </div>
        </div>
        <div>
          <button className="button__arrow">
            <Image
              className="arrow"
              src={arrow}
              width={36}
              height={32}
              alt="arrow"
            />
          </button>
        </div>
      </div>
      <div className="main__card2">
        <h3>Trending</h3>
        <div className="card2">
          <Image src={modeling} width={352} height={293} alt="Modelin" />
          <h4>Medellin</h4>
          <button>Action</button>
          <button>Comedy</button>
        </div>
        <div className="card2">
          <Image src={fastX} width={352} height={293} alt="fastX" />
          <h4>Fast X</h4>
          <button>Action</button>
          <button>Crime</button>
          <button>Thriller</button>
        </div>
        <div className="card2">
          <Image src={Shark} width={352} height={293} alt="shark" />
          <h4>The Black Dem...</h4>
          <button>Horror</button>
          <button>Thriller</button>
        </div>
      </div>
      <div className="main__card3">
        <h3>New release-movies</h3>
        <div className="card2">
          <Image src={ghosted} width={256} height={344} alt="ghosted" />
          <h4>Ghosted</h4>
          <button>HD</button>
          <button>
            <Image src={clock2} width={13} height={13} alt="clock" /> 3:12:00
          </button>
        </div>
        <div className="card2">
          <Image src={johnWick} width={256} height={344} alt="johnWick" />
          <h4>John Wick:ch...</h4>
          <button>HD</button>
          <button>
            <Image src={clock2} width={13} height={13} alt="clock" /> 3:12:00
          </button>
        </div>
        <div className="card2">
          <Image src={guadrians} width={256} height={344} alt="guadrians" />
          <h4>Guardians of th...</h4>
          <button>HD</button>
          <button>
            <Image src={clock2} width={13} height={13} alt="clock" /> 3:12:00
          </button>
        </div>
        <div className="card2">
          <Image src={Covenant} width={256} height={344} alt="covenant" />
          <h4>The Conven...</h4>
          <button>HD</button>
          <button>
            <Image src={clock2} width={13} height={13} alt="clock" /> 3:12:00
          </button>
        </div>
      </div>
      <div className="main__card3">
        <h3>New Release-Series</h3>
        <div className="card3">
          <Image src={Silo} width={256} height={344} alt="Silo" />
          <h4>Silo</h4>
          <button>CAM</button>
          <button>
            <Image src={clock2} width={13} height={13} alt="clock" /> 3:12:00
          </button>
        </div>
        <div className="card3">
          <Image src={BlackNight} width={256} height={344} alt="black knight" />
          <h4>Black Knight</h4>
          <button>CAM</button>
          <button>
            <Image src={clock2} width={13} height={13} alt="clock" /> 3:12:00
          </button>
        </div>
        <div className="card3">
          <Image src={dropsOfGod} width={256} height={344} alt="Drops of God" />
          <h4>Drops of God</h4>
          <button>CAM</button>
          <button>
            <Image src={clock2} width={13} height={13} alt="clock" /> 3:12:00
          </button>
        </div>
        <div className="card3">
          <Image src={nightAgent} width={256} height={344} alt="night agent" />
          <h4>The night agent</h4>
          <button>HD</button>
          <button>
            <Image src={clock2} width={13} height={13} alt="clock" /> 3:12:00
          </button>
        </div>
      </div>
      <div className="main__card3">
        <h3>Recommended</h3>
        <div className="card3">
          <Image src={robots} width={256} height={344} alt="robots" />
          <h4>Robots</h4>
          <button>CAM</button>
          <button>
            <Image src={clock2} width={13} height={13} alt="clock" /> 3:12:00
          </button>
        </div>
        <div className="card3">
          <Image src={loveAgain} width={256} height={344} alt="loveAgain" />
          <h4>Love Again</h4>
          <button>CAM</button>
          <button>
            <Image src={clock2} width={13} height={13} alt="clock" /> 3:12:00
          </button>
        </div>
        <div className="card3">
          <Image src={hypnotic} width={256} height={344} alt="hypnotic" />
          <h4>Hypnotic</h4>
          <button>CAM</button>
          <button>
            <Image src={clock2} width={13} height={13} alt="clock" /> 3:12:00
          </button>
        </div>
        <div className="card3">
          <Image src={paint} width={256} height={344} alt="paint" />
          <h4>Paint</h4>
          <button>HD</button>
          <button>
            <Image src={clock2} width={13} height={13} alt="clock" /> 3:12:00
          </button>
        </div>
      </div>
      <div className="main__card3">
        <div className="card4">
          <Image src={bookClub} width={256} height={344} alt="book club" />
          <h4>Book Club</h4>
          <button>CAM</button>
          <button>
            <Image src={clock2} width={13} height={13} alt="clock" /> 3:12:00
          </button>
        </div>
        <div className="card4">
          <Image src={theMother} width={256} height={344} alt="the mother" />
          <h4>The Mother</h4>
          <button>CAM</button>
          <button>
            <Image src={clock2} width={13} height={13} alt="clock" /> 3:12:00
          </button>
        </div>
        <div className="card4">
          <Image src={january6} width={256} height={344} alt="january 6th" />
          <h4>January 6th</h4>
          <button>CAM</button>
          <button>
            <Image src={clock2} width={13} height={13} alt="clock" /> 3:12:00
          </button>
        </div>
        <div className="card4">
          <Image src={sisu} width={256} height={344} alt="sisu" />
          <h4>Sisu</h4>
          <button>HD</button>
          <button>
            <Image src={clock2} width={13} height={13} alt="clock" /> 3:12:00
          </button>
        </div>
      </div>
    </div>
  );
}

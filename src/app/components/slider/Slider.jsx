"use client";
import React from "react";
import "./style.css";
import Image from "next/image";
import Watch from "../../../../public/images/watch.svg";
import Clock from "../../../../public/images/clock.svg";
import Slider from "react-slick";

export default function SliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <div className="main__slider3">
        <div className="button__slider">
          <button className="slider__button1">
            Watch now <Image src={Watch} width={27} height={27} alt="watch" />
          </button>
          <button className="slider__button2">
            Watch later <Image src={Clock} width={27} height={27} alt="clock" />
          </button>
        </div>
        <div className="container slider__text">
          <div className="text__wrapper">
            <h3 className="h3__text">Avatar: The Way of Water</h3>
            <div className="slider__buttons">
              <button className="inner__buttons">Action</button>
              <button className="inner__buttons">Adventure</button>
              <button className="inner__buttons">Science Fiction</button>
              <div className="slider__buttons__text">
                <p>2022</p>
                <p>3:12:00</p>
                <p>8.5</p>
              </div>
            </div>
            <div className="slider__descr-text">
              <p>
                Set more than a decade after the events of the first film, learn
                the story of the Sully family (Jake, Neytiri, and their kids),
                the trouble that follows them, the lengths they go to keep each
                other safe, the battles they fight to stay alive, and the
                tragedies they endure.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main__slider ">
        <div className="button__slider">
          <button className="slider__button1">
            Watch now <Image src={Watch} width={27} height={27} alt="watch" />
          </button>
          <button className="slider__button2">
            Watch later <Image src={Clock} width={27} height={27} alt="clock" />
          </button>
        </div>
        <div className="container slider__text">
          <div className="text__wrapper">
            <h3 className="h3__text">Avatar: The Way of Water</h3>
            <div className="slider__buttons">
              <button className="inner__buttons">Action</button>
              <button className="inner__buttons">Adventure</button>
              <button className="inner__buttons">Science Fiction</button>
              <div className="slider__buttons__text">
                <p>2022</p>
                <p>3:12:00</p>
                <p>8.5</p>
              </div>
            </div>
            <div className="slider__descr-text">
              <p>
                Set more than a decade after the events of the first film, learn
                the story of the Sully family (Jake, Neytiri, and their kids),
                the trouble that follows them, the lengths they go to keep each
                other safe, the battles they fight to stay alive, and the
                tragedies they endure.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main__slider4 ">
        <div className="button__slider">
          <button className="slider__button1">
            Watch now <Image src={Watch} width={27} height={27} alt="watch" />
          </button>
          <button className="slider__button2">
            Watch later <Image src={Clock} width={27} height={27} alt="clock" />
          </button>
        </div>
        <div className="container slider__text">
          <div className="text__wrapper">
            <h3 className="h3__text">Avatar: The Way of Water</h3>
            <div className="slider__buttons">
              <button className="inner__buttons">Action</button>
              <button className="inner__buttons">Adventure</button>
              <button className="inner__buttons">Science Fiction</button>
              <div className="slider__buttons__text">
                <p>2022</p>
                <p>3:12:00</p>
                <p>8.5</p>
              </div>
            </div>
            <div className="slider__descr-text">
              <p>
                Set more than a decade after the events of the first film, learn
                the story of the Sully family (Jake, Neytiri, and their kids),
                the trouble that follows them, the lengths they go to keep each
                other safe, the battles they fight to stay alive, and the
                tragedies they endure.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="main__slider2">
        <div className="button__slider">
          <button className="slider__button1">
            Watch now <Image src={Watch} width={27} height={27} alt="watch" />
          </button>
          <button className="slider__button2">
            Watch later <Image src={Clock} width={27} height={27} alt="clock" />
          </button>
        </div>
        <div className="container slider__text">
          <div className="text__wrapper">
            <h3 className="h3__text">Avatar: The Way of Water</h3>
            <div className="slider__buttons">
              <button className="inner__buttons">Action</button>
              <button className="inner__buttons">Adventure</button>
              <button className="inner__buttons">Science Fiction</button>
              <div className="slider__buttons__text">
                <p>2022</p>
                <p>3:12:00</p>
                <p>8.5</p>
              </div>
            </div>
            <div className="slider__descr-text">
              <p>
                Set more than a decade after the events of the first film, learn
                the story of the Sully family (Jake, Neytiri, and their kids),
                the trouble that follows them, the lengths they go to keep each
                other safe, the battles they fight to stay alive, and the
                tragedies they endure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}

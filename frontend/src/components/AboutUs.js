import React from "react";
import { NavBar } from "./NavBar";
import "./aboutus.css";
function AboutUs() {
  return (
    <div className="aboutuspage">
      <div className="navbox">
        <NavBar />
      </div>
      <div className="pbox">
      <div className="boxdata">
        <div className="heading">
          <h1 className="abt-us-h">About Us</h1>
        </div>
        <div className="afterpera">
          <p>
            ReliefAid is an international humanitarian organisation with a
            vision of saving lives and alleviating suffering of people affected
            by armed conflict and natural disasters through independent and
            impartial humanitarian action.
          </p>
        </div>
        <h1 className="abt-us-h">Our work includes:</h1>
        <div className="uldiv">
            <ul>
            <li>
                accessing conflict affected countries, such as Syria, Ukraine and
                Afghanistan in areas where few aid agencies are able or willing to
                operate
            </li>
            <li>
                providing life-saving aid, such as shelter materials (blankets,
                tarpaulins, cooking sets and children’s clothing), food and medical
                supplies to families in war zones and those affected by natural
                disasters who otherwise wouldn’t receive any assistance
            </li>
            <li>
                working directly on the ground, in the places aid is most needed and
                least accessible
            </li>
            <li>
                supporting children in their education, providing hope for the
                future
            </li>
            <li>mentoring the next generation of aid workers</li>
            <li>
                speaking out on behalf of the men, women and children whose voices
                are often silenced by conflict
            </li>
            </ul>
        </div>
        <div className="afterpera">
          <p>
            ReliefAid’s actions are driven by the principle of independence and
            impartiality. Our life-saving humanitarian action is provided on the
            basis of need, irrespective of religious and political beliefs, race
            and gender.
          </p>
        </div>
        <div className="afterpera">
          <p>
            ReliefAid relies solely on private donations. We do not receive any
            funding from governmental sources and are a registered charity with
            the New Zealand Charities Commission.
          </p>
        </div>
        <h1  className="abt-us-h">Why ReliefAid is effective</h1>
        <div className="afterpera">
          <p>
            ReliefAid has the experience and networks to provide life-saving
            humanitarian assistance where it is most needed, in places where
            other aid organisations cannot or will not operate.
          </p>
        </div>
        <div className="uldiv">
            <ul>
            <li>
                ReliefAid has proven experience – we have successfully provided
                humanitarian assistance in conflict zones since 2015.
            </li>
            <li>
                We have proven experience in warzones and natural disasters – our
                staff have successfully delivered humanitarian assistance in Syria,
                Yemen, South Sudan, Pakistan, Afghanistan, Iraq, Turkmenistan,
                Turkey and Ukraine.
            </li>
            <li>
                We have existing networks – we have the ability to immediately
                mobilise on-ground networks to reach those inaccessible to other aid
                organisations.
            </li>
            <li>
                Direct action – we are directly involved in the delivery of our
                humanitarian assistance overseeing all operations.
            </li>
            </ul>
        </div>
        <h1 className="abt-us-h">Why war zones?</h1>
        <div className="afterpera">
          {" "}
          <p>
            Despite fewer wars being experienced globally an intensification of
            violence has lead to a larger number of people being displaced from
            their homes.
          </p>
        </div>
        <div className="afterpera">
          {" "}
          <p>
            Over 100 million people are currently displaced due to conflict with
            civilian populations overwhelmingly paying the price.
          </p>
        </div>
        <div className="afterpera">
          {" "}
          <p>
            Those displaced are often isolated, vulnerable and without the
            services required for basic life support.
          </p>
        </div>
        <div className="afterpera">
          {" "}
          <p>
            Support from the international community has in some cases provided
            relief but needs greatly outstrip the support being provided.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AboutUs;

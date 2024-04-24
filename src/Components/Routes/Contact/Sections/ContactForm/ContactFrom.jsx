"use client";
import CommonHeadingPara from "@/Components/Cards/CommonHeadingPara/CommonHeadingPara";
import Button from "@/Components/Tags/Button/Button";
import React, { useState } from "react";

const ContactFrom = () => {
  const [Form, setForm] = useState({
    name: "",
    email: "",
    context: "",
    subject: "",
    comment: "",
  });

  const handleForm = e => {
    const { name, value } = e.target;
    setForm(prevFormValue => ({ ...prevFormValue, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <section className=" h-auto w-auto  bg-white  flex flex-col py-32    ">
      <div className="flex flex-col gap-y-16 items-center max-w-maxWidth mx-auto ">
        <CommonHeadingPara
          headinTxt={"Contact Us"}
          paraTxt={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          }
        />
        <form
          onSubmit={handleSubmit}
          className=" h-auto w-thousandSixtyEight bg-Gray pt-fiftyFive pb-sixtyNine px-seventySix rounded-xl relative flex flex-col gap-y-6 "
        >
          <div className="flex gap-x-8 w-full relative  ">
            <div className=" w-1/2 relative flex flex-col gap-y-six ">
              <label className="label-one text-DarkBlue" htmlFor="name">
                {" "}
                Name{" "}
              </label>
              <input
                onChange={handleForm}
                type="text"
                className=" formInput Body-One-2nd text-DarkBlue w-full "
                placeholder="your name"
                name="name"
                id="name"
                value={Form.name}
              />
            </div>
            <div className=" w-1/2 relative flex flex-col gap-y-six ">
              <label
                className="label-one text-DarkBlue capitalize"
                htmlFor="email"
              >
                {" "}
                email{" "}
              </label>
              <input
                onChange={handleForm}
                type="email"
                className=" formInput Body-One-2nd text-DarkBlue w-full  "
                placeholder="enter your email"
                name="email"
                id="email"
                value={Form.email}
              />
            </div>
          </div>
          <div className="flex gap-x-8 w-full relative  ">
            <div className=" w-1/2 relative flex flex-col gap-y-six ">
              <label className="label-one text-DarkBlue" htmlFor="context">
                {" "}
                Context{" "}
              </label>
              <input
                onChange={handleForm}
                type="text"
                className=" formInput Body-One-2nd text-DarkBlue w-full "
                placeholder="Provide context"
                name="context"
                id="context"
                value={Form.context}
              />
            </div>
            <div className=" w-1/2 relative flex flex-col gap-y-six ">
              <label className="label-one text-DarkBlue" htmlFor="subject">
                {" "}
                subject{" "}
              </label>
              <div className=" relative w-full ">
                <select
                  id="subject"
                  onChange={handleForm}
                  name="subject"
                  placeholder="Select Subject"
                  className="formInput Body-One-2nd text-DarkBlue w-full px-8  "
                  defaultValue={"select"}
                >
                  <option
                    className="formInput Body-One-2nd text-DarkBlue w-full px-8 capitalize  "
                    disabled
                    value={"select"}
                  >
                    {" "}
                    Select Subject{" "}
                  </option>
                  <option
                    className="formInput Body-One-2nd text-DarkBlue w-full px-8 capitalize "
                    value="web Desgin "
                  >
                    Web Desgin
                  </option>
                  <option
                    className="formInput Body-One-2nd text-DarkBlue w-full px-8 capitalize  "
                    value="web development"
                  >
                    {" "}
                    Web Development{" "}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className=" w-full relative flex flex-col gap-y-six ">
            <label className="label-one text-DarkBlue" htmlFor="comment">
              {" "}
              Message{" "}
            </label>
            <textarea
              onChange={handleForm}
              className=" formInput Body-One-2nd text-DarkBlue w-full pt-yellowBoxPadding pb-ninetyTwo "
              placeholder="your name"
              name="comment"
              id="comment"
              value={Form.comment}
            ></textarea>
          </div>
          <Button
            text={"Send Messege"}
            className={" blackBtn w-twoFiftyFour "}
          />
        </form>
      </div>
    </section>
  );
};

export default ContactFrom;

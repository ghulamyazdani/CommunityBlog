import React from "react";
import IconTwitter from "./Icons/twitter";
import IconFacebook from "./Icons/Facebook";
import IconLinkedin from "./Icons/Linkedin";
import IconInstagram from "./Icons/Instagram";

export default function share(): JSX.Element {
  return (
    <div className="flex flex-col mr-6 mt-10 sticky co">
      <p>Share this</p>
      <IconTwitter className="h-10 w-10 mx-auto m-2" />
      <IconLinkedin className="h-10 w-10 mx-auto m-2" />
      <IconFacebook className="h-10 w-10 mx-auto m-2" />
      <IconInstagram className="h-10 w-10 mx-auto m-2" />
    </div>
  );
}

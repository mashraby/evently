import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="wrapper flex-center flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="logo"
          />
        </Link>

        <p>
          Created by{" "}
          <Link className="text-blue-500" href={"https://t.me/MashrabYoldashov"} target="_blank">
            @Mashrab Yo'ldashov
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

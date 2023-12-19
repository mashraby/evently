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

        <p>2023 Evently. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

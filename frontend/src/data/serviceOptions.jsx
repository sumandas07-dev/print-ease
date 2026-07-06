import { FaPrint, FaGlobe } from "react-icons/fa";
import { LuScanText } from "react-icons/lu";
import { IoDocumentText } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import { TbFileCertificate } from "react-icons/tb";
import { BsCamera } from "react-icons/bs";

const serviceOptions = [
  {
    id: 1,
    title: "Print",
    price: "₹5 / page",
    icon: <FaPrint />,
  },
  {
    id: 2,
    title: "Scan",
    price: "₹10 / page",
    icon: <LuScanText />,
  },
  {
    id: 3,
    title: "Xerox",
    price: "₹5 / page",
    icon: <IoDocumentText />,
  },
  {
    id: 4,
    title: "Form Fill",
    price: "₹50 / form",
    icon: <MdOutlineDescription />,
  },
  {
    id: 5,
    title: "Lamination",
    price: "₹20 / page",
    icon: <TbFileCertificate />,
  },
  {
    id: 6,
    title: "Passport Photo",
    price: "₹10 / photo",
    icon: <BsCamera />,
  },
  {
    id: 7,
    title: "Online Application",
    price: "Starts ₹30",
    icon: <FaGlobe />,
  },
];

export default serviceOptions;
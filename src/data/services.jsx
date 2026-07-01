import { FaPrint } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { LuScanText } from "react-icons/lu";
import { MdOutlineDescription } from "react-icons/md";
import { TbFileCertificate } from "react-icons/tb";
import { FaGlobe } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Print",
    icon: <FaPrint />,
  },
  {
    id: 2,
    title: "Scan",
    icon: <LuScanText />,
  },
  {
    id: 3,
    title: "Xerox",
    icon: <IoDocumentText />,
  },
  {
    id: 4,
    title: "Form Fill",
    icon: <MdOutlineDescription />,
  },
  {
    id: 5,
    title: "Lamination",
    icon: <TbFileCertificate />,
  },
  {
    id: 6,
    title: "Online",
    icon: <FaGlobe />,
  },
];

export default services;
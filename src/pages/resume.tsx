import { NextPage } from "next/types";
import { Document } from "react-pdf";

const Resume: NextPage = () => {
  return (
    <>
      <Document file="resume.pdf"></Document>
    </>
  );
};

export default Resume;

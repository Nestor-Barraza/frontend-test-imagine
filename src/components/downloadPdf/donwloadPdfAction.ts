import { ApiFetch } from "src/utils/";

//Get enterprise
export const downloadPdfAction = async (name: string) => {
  try {
    const { data } = await ApiFetch.get(`/get-pdf/lol`, {
      responseType: "blob",
    });

    // create a url object
    const blobUrl = URL.createObjectURL(
      new Blob([data], { type: "application/pdf" })
    );

    //create a temporal link for download pdf
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = `${name}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

import * as contentful from "contentful";

export const contentfulClient = contentful.createClient({
  space: "41lwxzzd2wfs",
  accessToken: "6QXmEenclKpnVaaVB3lBc2MKsuPs3b_-tPRTLxcRPMM",
});

export type ContentfulMovie = {
  fields: {
    movie: {
      fields: {
        file: {
          url: string;
          fileName: string;
          contentType: string;
          details: {
            size: number;
            image: {
              width: number;
              height: number;
            };
          };
        };
      };
    };
    thumbnail: {
      fields: {
        file: {
          url: string;
          fileName: string;
          contentType: string;
          details: {
            size: number;
            image: {
              width: number;
              height: number;
            };
          };
        };
      };
    };
  };
};

export type worksType = {
  contentTypeId: "works";
  sys: {
    id: string;
  };
  fields: {
    title: contentful.EntryFieldTypes.Text;
    movie: {
      fields: {
        file: {
          url: string;
          fileName: "npu.mp4";
          contentType: "video/mp4";
        };
      };
    };
  };
  order?: number;
};

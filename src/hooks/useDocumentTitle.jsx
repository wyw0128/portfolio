import React, { useEffect } from "react";

export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `Aria Wu - ${title}`;
  }, []);
};

import React from "react";

const hello = (req, res) => {
  res.status(200).json({ name: "Mohabbat Ali" });
};

export default hello;

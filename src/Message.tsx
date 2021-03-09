/** @format */
import React from "react";

// component props
type MessageProps = { msg: string };

// component with implicit return
export const Message = ({ msg }: MessageProps) => <p>{msg}</p>;

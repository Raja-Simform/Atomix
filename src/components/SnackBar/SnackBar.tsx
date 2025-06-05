import styled from "styled-components";
import type {  SnackBarContainerProps, SnackBarProps,  colorType } from "./SnackbarTypes";
const ToastContainer = styled.div<SnackBarContainerProps>`
  position: fixed;
  bottom: 40px;
  right: 40px;
  height: 5rem;
  width: 20rem;
  border-radius: 10px;
  background-color: #1b8ef3;
  display: flex;
  justify-content: center;

  button {
    height: fit-content;
    margin-top: 10px;
  }
  ${(props) => {
    switch (props.variant) {
      case "plain":
        return `
          background-color: #090707;
          color: ${getColorVariant(props.color, "plain")};
          border: none;
        `;
      case "soft":
        return `
          background-color: ${getColorVariant(props.color, "soft")};
          color: ${getColorVariant(props.color, "text")};
          border: none;
        `;
      case "solid":
        return `
          background-color: ${getColorVariant(props.color, "solid")};
          color: #ffffff;
          border: none;
        `;
      case "outlined":
      default:
        return `
          background-color: #1a1a1a;
          color: ${getColorVariant(props.color, "text")};
          border: 1px solid ${getColorVariant(props.color, "border")};
        `;
    }
  }}
`;
function getFontSize(size: string) {
  switch (size) {
    case "sm":
      return 0.7;
    case "md":
      return 1;
    case "lg":
    default:
      return 1.3;
  }
}

function getColorVariant(color: string, type: colorType): string {
  const colorMap: Record<string, Record<colorType, string>> = {
    blue: {
      solid: "#0077FF",
      soft: "#E6F0FF",
      text: "#0077FF",
      border: "#0077FF",
      plain: "#0077FF",
    },
    gray: {
      solid: "#6E7781",
      soft: "#F0F1F3",
      text: "#6E7781",
      border: "#6E7781",
      plain: "#6E7781",
    },
    red: {
      solid: "#E5484D",
      soft: "#FFEFEF",
      text: "#E5484D",
      border: "#E5484D",
      plain: "#E5484D",
    },
    green: {
      solid: "#30A46C",
      soft: "#ECFDF3",
      text: "#30A46C",
      border: "#30A46C",
      plain: "#30A46C",
    },
    yellow: {
      solid: "#F5A623",
      soft: "#FFF8E6",
      text: "#F5A623",
      border: "#F5A623",
      plain: "#F5A623",
    },
    white: {
      solid: "#FFFFFF",
      soft: "#FFFFFF",
      text: "#FFFFFF",
      border: "#FFFFFF",
      plain: "#FFFFFF",
    },
  };
  const lowerColor = color.toLocaleLowerCase();
  return colorMap[lowerColor]?.[type] || colorMap.white[type];
}

const Messege = styled.div<{ size: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  height: 100%;

  h5 {
    margin: 0;
    font-size: ${(props) => getFontSize(props.size)}rem;
    font-weight: 600;
  }

  span {
    font-size: ${(props) => getFontSize(props.size) * 0.675}rem;
  }
`;

function SnackBar({ variant, color, size, onClose }: SnackBarProps) {
  return (
    <ToastContainer variant={variant} color={color} size={size}>
      <Messege size={size}>
        <h5>Notification alert</h5>
        <span>102 unread messages since last month.</span>
      </Messege>
      <button onClick={onClose}>Close</button>
    </ToastContainer>
  );
}
export default SnackBar;

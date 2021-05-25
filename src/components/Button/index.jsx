import { ButtonStyled } from "./style";

function Button({ children, ...rest }) {
  return (
    <ButtonStyled variant="contained" color="secondary" {...rest}>
      {children}
    </ButtonStyled>
  );
}

export default Button;

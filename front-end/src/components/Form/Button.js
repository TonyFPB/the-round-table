import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';


export default function Button({variant="contained", children, ...props}) {
  return(
    <StyledButton variant={variant} {...props}>
        {children}
    </StyledButton>
  )
}

const StyledButton = styled(MuiButton)({
    marginTop:8,
    backgroundColor:"#8F5E29",
})
import { Fab } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function AddButton({ children, ...props}) {
  return(
    <StyledButton aria-label="add"  {...props}>
        {children}
    </StyledButton>
  )
}


const StyledButton = styled(Fab)({
  marginLeft:"8px",
  backgroundColor:"#8F5E29",
  fontSize:"15px"
})
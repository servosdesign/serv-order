import { StyledDiv, StyledForm, StyledActions } from './checkout.styles';

const Checkout = props => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <StyledForm onSubmit={confirmHandler}>
      <StyledDiv>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' />
      </StyledDiv>
      <StyledDiv>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' />
      </StyledDiv>
      <StyledDiv>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' />
      </StyledDiv>
      <StyledDiv>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' />
      </StyledDiv>
      <StyledActions>
      <button type='button' onClick={props.onCancel}>Cancel</button>
      <button className='submit'>Confirm</button>
      </StyledActions>
    </StyledForm>
  );
};

export default Checkout;
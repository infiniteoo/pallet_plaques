import StoreNameDropDown from "./StoreNameDropDown";
import NumberOfPalletsDropDown from "./NumberOfPalletsDropDown";
import OrderNumberInput from "./OrderNumberInput";
import AddStopButton from "./AddStopButton";
import StopNumber from "./StopNumber";

const CompleteStopGroup = ({numberOfStops, setNumberOfStops}) => {
  return (
    <>
      <StopNumber numberOfStops={numberOfStops} />
      <StoreNameDropDown />
      <NumberOfPalletsDropDown />
      <OrderNumberInput />
      <AddStopButton numberOfStops={numberOfStops} setNumberOfStops={setNumberOfStops} />
    </>
  );
};

export default CompleteStopGroup;

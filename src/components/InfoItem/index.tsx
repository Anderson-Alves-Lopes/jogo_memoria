import * as K from './styles';

type Props = {
    label: string;
    value: string;
}

export const InfoItem = ({label, value}: Props) =>{
   return (
    <K.Container>
      <K.Label>{label}</K.Label>
      <K.Value>{value}</K.Value>
    </K.Container>
   );
};
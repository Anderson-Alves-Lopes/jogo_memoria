import { GridItemType } from '../../types/GridItemType';
import * as G from './styles';
import SkullPng from '../../assets/images/skull.png';
import {items} from '../../data/items';
type Props = {
    item: GridItemType,
    onClick: () => void,
}
export const GridItem = ({item, onClick}: Props) =>{
    return (
      <G.Container 
       shownBackground={item.permanentShown || item.shown}
       onClick={onClick} 
      >
           {item.permanentShown === false && item.shown === false &&
               <G.Icon src={SkullPng} alt="" opacity={0.7} />
           }
           {(item.permanentShown || item.shown) && item.item !== null &&
              <G.Icon  src={items[item.item].icon} alt="" />
           }
      </G.Container>
    );
}
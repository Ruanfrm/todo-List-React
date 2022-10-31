import { type } from "@testing-library/user-event/dist/type";
// import {Container, Area, Header} from "../../App.styles";
import { Container } from "./styles";
import {Item} from "../../types/items"
import { useState } from "react";



type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void


}

export const ListItem = ({ item }: Props) => {

    const [isChecked, setIsChecked] = useState(item.done)

    return (
      <Container done={isChecked}>
            <input type="checkbox"
                  checked={isChecked} 
                  onChange={e => setIsChecked(e.target.checked)}
                  />
            <label>{item.name} </label>
      </Container>
    )
}
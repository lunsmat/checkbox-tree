import { useState, useEffect } from 'react';
import { Item } from './items';

interface ItemComponentProps {
    item: Item;
    onUpdate: (item: Item) => void;
}

const ItemComponent = (props: ItemComponentProps) => {
    const [item, setItem] = useState(props.item);
    
    const onUpdateChildren = (children: Item) => {
        const newItem = {
            ...item,
            subItems: [...(item.subItems ?? [])]
        };

        if (newItem.subItems) {
            const index = newItem.subItems.findIndex((i) => i.id === children.id);
            newItem.subItems[index] = { ...children };
        }

        if (!children.selected) {
            newItem.selected = false;
        } else {
            if (newItem.subItems) {
                let selected = true;
                for (let subItem of newItem.subItems)
                {
                    if (!subItem.selected) {
                        selected = false;
                        break;
                    }
                }

                newItem.selected = selected;
            }
        }

        setItem(newItem);
        props.onUpdate(newItem);
    };

    const updateChildrenOfItem = (item: Item, selected: boolean): Item => {
        const newItem = {
            ...item,
            selected: selected,
            subItems: [...(item.subItems ?? [])]
        };

        if (newItem.subItems) {
            for (let subItem of newItem.subItems) {
                let index = newItem.subItems.findIndex((i) => i.id === subItem.id);
                subItem = updateChildrenOfItem(subItem, selected);
                newItem.subItems[index] = { ...subItem };
            }
        }

        return newItem;
    };

    useEffect(() => {
        setItem(props.item);
    }, [props.item.selected]);

    return (
        <div style={{ marginLeft: '50px' }}>
            <input type="checkbox" checked={item.selected} onChange={(e) => {
                const newItem = updateChildrenOfItem(item, e.target.checked);

                setItem({ ...newItem });
                props.onUpdate(newItem);
            }} /> {item.label}

            {item.subItems?.map((subItem) => (
                <ItemComponent item={subItem} key={subItem.id} onUpdate={onUpdateChildren} />
            ))}
        </div>
    );
};

export default ItemComponent;

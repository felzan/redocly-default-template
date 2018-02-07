import * as React from 'react';
import { UserMenuItemProps, UniversalLink } from 'RedocLy';
import { HeaderItem, NestedItem, Separator, ExternalIcon } from './styled.elements';

export class UserMenuItem extends React.Component<UserMenuItemProps> {
  render() {
    const { item: { active, expanded, items, link, title, separator }, depth, isLast } = this.props;

    const hasChildren = items && items.length > 0;
    const external = false;
    const ItemTitleComponent = depth === 0 ? HeaderItem : NestedItem;

    const element =
      separator !== undefined ? (
        <Separator>{separator}</Separator>
      ) : (
        <ItemTitleComponent expanded={expanded && hasChildren} active={active} last={isLast}>
          {title}
          {external && <ExternalIcon />}
        </ItemTitleComponent>
      );

    return link ? <UniversalLink to={link}>{element}</UniversalLink> : element;
  }
}

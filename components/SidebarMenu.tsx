import * as React from 'react';

import {
  SidebarWrapper,
  SidebarTrigger,
  Sidebar,
  SidebarContent,
  UserSidebarMenuProps,
  MenuTree,
} from 'RedocLy';

export class UserSidebarMenu extends React.Component<UserSidebarMenuProps> {
  render() {
    const {
      menuItems,
      children,
      sidebarRef,
      isMobileSidebarOpened,
      onMobileSidebarToggle,
      location,
    } = this.props;

    return (
      <SidebarWrapper>
        <SidebarTrigger opened={isMobileSidebarOpened} onClick={onMobileSidebarToggle} />
        <Sidebar animate={true} opened={isMobileSidebarOpened} innerRef={sidebarRef}>
          <MenuTree items={menuItems} location={location} />
        </Sidebar>
        <SidebarContent>{children}</SidebarContent>
      </SidebarWrapper>
    );
  }
}

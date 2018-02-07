import { styled, withProps } from 'RedocLy';

import { lighten } from 'polished';
const externalIconDark = require('../content/images/external-link-dark.svg');

export const ExternalIcon = styled.i`
  display: inline-block;
  vertical-align: middle;
  background: url(${externalIconDark});
  width: 10px;
  height: 10px;
  background-repeat: no-repeat;
  margin-left: 5px;
`;

export const Separator = styled.span`
  display: block;
  padding: 0.625em 0;
  position: relative;
  cursor: default;

  &:before {
    content: '';
    border-left: 3px solid white;
    position: absolute;
    top: -50%;
    bottom: -50%;
    left: -12px;
    z-index: 1;
  }

  &:empty {
    padding: 0.1em 0;
  }

  &:empty:before {
    top: -1.5em;
    bottom: -1.5em;
  }
`;

export const MenuItemTitle = withProps<{
  expanded: boolean;
  active: boolean;
  last: boolean;
}>(styled.div)`
  cursor: pointer;
  position: relative;
  font-weight: 600;

  color: ${props => (props.active ? props.theme.colors.primary : 'inherit')};

  cursor: pointer;
  opacity: 1;
`;

export const NestedItem = MenuItemTitle.extend`
  font-size: 0.91em;
  padding: 0.9em 0;

  /* line */
  :after {
    content: '';
    display: block;
    position: absolute;
    left: -11px;
    border-left: 1px solid ${props => lighten(0.5, props.theme.colors.text)};
    height: ${props => (props.expanded || props.last ? '50%' : '100%')};
    top: 0;
    display: inline-block;
  }

  /* circle */
  :before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    left: -13px;
    z-index: 2;
    width: 5px;
    height: 5px;
    background-color: ${props =>
      props.active ? props.theme.colors.primary : lighten(0.5, props.theme.colors.text)};
    border-radius: 50%;
    transform: translateY(-50%);
  }
`;

export const HeaderItem = MenuItemTitle.extend`
  position: relative;
  display: block;
  font-size: 1.17em;
  margin-bottom: ${props => (props.expanded ? '0.25em' : '1.2em')};
`;

import * as React from 'react';

import {
  FooterColumns,
  FooterColumn,
  ColumnTitle,
  ColumnList,
  ColumnListItem,
  UniversalLink,
  FooterProps,
  FooterColumnsWrapper,
  FooterInfo,
  FooterCopyrightInfo,
  FooterList,
  FooterListItem,
} from 'RedocLy';

export class Footer extends React.PureComponent<FooterProps> {
  render() {
    const { columns, copyrightText, list } = this.props.data;

    const columnsElement = columns ? (
      <FooterColumnsWrapper>
        <FooterColumns>
          {columns.map((column, index) => (
            <FooterColumn key={index}>
              <ColumnTitle>{column.title}</ColumnTitle>
              <ColumnList>
                {column.items.map((columnItem, columnItemInex) => (
                  <ColumnListItem key={columnItemInex}>
                    <UniversalLink to={columnItem.link}>{columnItem.title}</UniversalLink>
                  </ColumnListItem>
                ))}
              </ColumnList>
            </FooterColumn>
          ))}
        </FooterColumns>
      </FooterColumnsWrapper>
    ) : null;

    const infoElement =
      list || copyrightText ? (
        <FooterInfo>
          <FooterList>
            {(list || []).map((item, index) => (
              <FooterListItem key={index}>
                <UniversalLink to={item.link}>{item.title}</UniversalLink>
              </FooterListItem>
            ))}
          </FooterList>
          <FooterCopyrightInfo>{copyrightText}</FooterCopyrightInfo>
        </FooterInfo>
      ) : null;

    return (
      <React.Fragment>
        {columnsElement}
        {infoElement}
      </React.Fragment>
    );
  }
}

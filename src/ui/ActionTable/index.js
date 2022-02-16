import { View } from 'react-native';

import {
  TableView,
  Cell,
  CellIcon,
  CellText,
  Divider,
  Touchable,
  styled,
  PaddedView,
  H4,
  useTheme,
} from '@apollosproject/ui-kit';
import { RockAuthedWebBrowser } from '@apollosproject/ui-connected';

const RowHeader = styled(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: theme.sizing.baseUnit,
}))(PaddedView);

const ThemedH4 = styled(({ theme }) => ({
  color: theme.colors.text.secondary,
}))(H4);

const Name = styled({
  flexGrow: 1,
})(View);

const ActionTable = () => {
  const theme = useTheme();
  return (
    <RockAuthedWebBrowser>
      {(openUrl) => (
        <View>
          <RowHeader>
            <Name>
              <ThemedH4>{'Connect'}</ThemedH4>
            </Name>
          </RowHeader>
          <TableView>
            <Touchable
              onPress={() =>
                openUrl('https://app.woodmenvalley.org/connect?Theme=MobileApp')
              }
            >
              <Cell>
                <CellText>Connect with us</CellText>
                <CellIcon
                  name="caret-right"
                  fill={theme.colors.text.secondary}
                />
              </Cell>
            </Touchable>
            <Divider />
            <Touchable
              onPress={() =>
                openUrl('https://app.woodmenvalley.org/prayer?Theme=MobileApp')
              }
            >
              <Cell>
                <CellText>I need prayer</CellText>
                <CellIcon
                  name="caret-right"
                  fill={theme.colors.text.secondary}
                />
              </Cell>
            </Touchable>
            <Divider />
            <Touchable
              onPress={() =>
                openUrl('https://app.woodmenvalley.org/baptism?Theme=MobileApp')
              }
            >
              <Cell>
                <CellText>Get baptized</CellText>
                <CellIcon
                  name="caret-right"
                  fill={theme.colors.text.secondary}
                />
              </Cell>
            </Touchable>
            <Divider />
            <Touchable
              onPress={() =>
                openUrl('https://app.woodmenvalley.org/care?Theme=MobileApp')
              }
            >
              <Cell>
                <CellText>Get care</CellText>
                <CellIcon
                  name="caret-right"
                  fill={theme.colors.text.secondary}
                />
              </Cell>
            </Touchable>
            <Divider />
            <Touchable
              onPress={() =>
                openUrl(
                  'https://app.woodmenvalley.org/campuses?Theme=MobileApp'
                )
              }
            >
              <Cell>
                <CellText>Our locations</CellText>
                <CellIcon
                  name="caret-right"
                  fill={theme.colors.text.secondary}
                />
              </Cell>
            </Touchable>
            {/* <Divider />
          <Touchable
            onPress={() => openUrl('https://apollosrock.newspring.cc/page/233')}
          >
            <Cell>
              <CellText>Report an issue</CellText>
              <CellIcon name="caret-right" />
            </Cell>
          </Touchable> */}
          </TableView>
        </View>
      )}
    </RockAuthedWebBrowser>
  );
};

const StyledActionTable = styled(({ theme }) => ({
  paddingBottom: theme.sizing.baseUnit * 100,
}))(ActionTable);

export default StyledActionTable;

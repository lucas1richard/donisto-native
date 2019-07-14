import * as React from 'react';
import { View } from 'react-native';
import H3 from 'components/H3';
import Txt from 'components/Txt';
import Loader from 'components/Loader';
import LandingPageCause from './components/Cause';

export interface ICausesSectionProps {
  causes?: IOrganization.DetailCause[];
  viewCauseDetail: (uuid: string) => any;
}

class CausesSection extends React.PureComponent<ICausesSectionProps> {
  render() {
    const { causes, viewCauseDetail } = this.props;
    return (
      <View>
        <H3 color="primary">
          Causes:
        </H3>
        {!causes && <Loader />}
        {(causes && causes.length === 0) && (
          <Txt>
            None
          </Txt>
        )}
        {causes && causes.map((cause) => (
          <LandingPageCause
            key={cause.uuid}
            uuid={cause.uuid}
            name={cause.name}
            donations={cause.donations}
            createdAt={cause.createdAt}
            updatedAt={cause.updatedAt}
            goal_amount={cause.goal_amount}
            viewCauseDetail={viewCauseDetail}
          />
        ))}
      </View>
    );
  }
}

export default CausesSection;
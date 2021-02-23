import {injectIntl, FormattedMessage} from 'react-intl';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {showMousePosition} from '../../reducers/mouse-position.js';
import styles from './stage-options.css';
import formStyles from '../sprite-info/sprite-info.css';
import showIcon from '../sprite-info/icon--show.svg';
import hideIcon from '../sprite-info/icon--hide.svg';

const StageOptions = props => {
    const {
        stageSelected,
        mousePositionVisible,
        onShowMousePosition,
    } = props;

    const xyLabel = (
        <FormattedMessage
            defaultMessage="Mouse x, y"
            description="Label for show mouse x,y radio button in the stage header"
            id="gui.stageSelector.showXY"
        />
    );

    const handlePressShowMousePosition = (e, isVisible) => {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            this.props.onShowMousePosition(isVisible)
        }
    };

    return (
        <div className={classNames(formStyles.column, styles.stageOptions)}>
            <div className={formStyles.radioWrapper}>
                <div
                    className={classNames(
                        formStyles.radio,
                        formStyles.radioFirst,
                        formStyles.iconWrapper,
                        { [formStyles.isActive]: mousePositionVisible }
                    )}
                    tabIndex="0"
                    onClick={() => onShowMousePosition(true)}
                    onKeyPress={(e) => handlePressShowMousePosition(e, true)}
                >
                    <img
                        className={formStyles.icon}
                        src={showIcon}
                    />
                </div>
                <div
                    className={classNames(
                        formStyles.radio,
                        formStyles.radioLast,
                        formStyles.iconWrapper,
                        { [formStyles.isActive]: !mousePositionVisible }
                    )}
                    tabIndex="0"
                    onClick={() => onShowMousePosition(false)}
                    onKeyPress={(e) => handlePressShowMousePosition(e, false)}
                >
                    <img
                        className={formStyles.icon}
                        src={hideIcon}
                    />
                </div>
            </div>
            <span className={styles.label}>{xyLabel}</span>
        </div>
    );
};

StageOptions.propTypes = {
    stageSelected: PropTypes.bool.isRequired,
    mousePositionVisible: PropTypes.bool,
    onShowMousePosition: PropTypes.func
}

const mapStateToProps = state => ({
    mousePositionVisible: state.scratchGui.mousePosition.visible
});

const mapDispatchToProps = dispatch => ({
    onShowMousePosition: isVisible => dispatch(showMousePosition(isVisible))
});

export default injectIntl(connect(
    mapStateToProps,
    mapDispatchToProps
)(StageOptions));
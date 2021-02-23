import React from 'react'
import PropTypes from 'prop-types'
import styles from './mouse-position.css'
import {connect} from 'react-redux'
import classNames from 'classnames'

const MousePositionComponent = props => {
    const { visible, x, y } = props.mousePosition;

    return (
        <div className={classNames(props.className, {[styles.hidden]: !visible})}>
            <span className={styles.mousePosition}>x={x}, y={y}</span>
        </div>
    );
};

MousePositionComponent.propTypes = {
    className: PropTypes.string,
    mousePosition: PropTypes.shape({
        visible: PropTypes.bool,
        x: PropTypes.number,
        y: PropTypes.number
    }).isRequired
};

const mapStateToProps = state => ({
    mousePosition: state.scratchGui.mousePosition
});

export default connect(
    mapStateToProps
)(MousePositionComponent);
import React from 'react'
import PropTypes from 'prop-types'
import styles from './mouse-position.css'
import {connect} from 'react-redux'

const MousePositionComponent = props => (
    <div className={props.className}>
        <span className={styles.mousePosition}>x: {props.mousePosition.x}, y: {props.mousePosition.y}</span>
    </div>
);

MousePositionComponent.propTypes = {
    className: PropTypes.string,
    mousePosition: PropTypes.shape({
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
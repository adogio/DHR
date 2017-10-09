import React, { Component } from 'react';


class DHR extends Component {
    stopper;

    constructor(props) {
        super(props);
        this.loadContent = this.loadContent.bind(this);
        this.success = this.success.bind(this);
        this.state = {
            width: 0,
            isDisplay: false
        }
    }

    componentWillMount() {
        if (!Boolean(window.adog)) window.adog = {};
        window.adog.dhr = {
            set: this.loadContent,
            done: this.success,
        };
    }

    render() {
        return (
            <div
                style={{
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    width: "100%",
                    height: "5px",
                    backgroundColor: "transparent",
                    zIndex: "10"
                }}>
                <div
                    style={{
                        transition: this.props.delay + "s all" || "0.2s all",
                        height: this.state.isDisplay ? "100%" : "0",
                        width: this.state.width + "%",
                        backgroundColor: this.props.color || "lightblue"
                    }}>
                </div>
            </div>
        );
    }

    success() {
        clearTimeout(this.stopper);
        this.loadContent(100);
        this.stopper = setTimeout(() => {
            this.setState({
                isDisplay: false
            }, () => {
                this.stopper = setTimeout(() => {
                    this.setState({
                        width: 0
                    })
                }, this.props.delay || 0.2 * 1000);
            })
        }, this.props.delay || 0.2 * 2000);
    }

    loadContent(howmuch) {
        clearTimeout(this.stopper);
        if (this.state.isDisplay) {
            this.setState({
                width: howmuch < 100 ? howmuch > 0 ? howmuch : 0 : 100
            })
        } else {
            this.setState({
                isDisplay: true
            }, () => {
                this.stopper = setTimeout(() => {
                    this.setState({
                        width: howmuch < 100 ? howmuch > 0 ? howmuch : 0 : 100
                    })
                }, this.props.delay || 0.2 * 1000);
            })
        }
    }
}

export default DHR;

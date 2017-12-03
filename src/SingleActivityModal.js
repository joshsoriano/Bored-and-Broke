import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import Carousel from 'react-bootstrap/lib/Carousel';
import {Form, FormGroup, ControlLabel, FormControl, Col, Checkbox} from 'react-bootstrap'
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import eventExample from './userImage.png';
import imageExample from './user2image.png';
import logo_black from './images/logo-black.png';

const propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestClose: PropTypes.func,
    savedAlready: PropTypes.bool,
    readyForCarousel: PropTypes.bool,
};

const defaultProps = {
  onRequestClose: () => {},
};

const styles = {
    main: {
      position: 'relative',
    //   height: '100px',
      width: '100px',
      background: '#1ABC9C',
    },
    titleTextContainer: {
      paddingBottom: '4px',
      justifyContent: 'center',
      display: 'flex',
    },
    titleText: {
      color: 'black',
      fontWeight: '500',
      fontSize: '18px',
    },
    descriptionTextContainer: {
      justifyContent: 'center',
      display: 'flex',
      textAlign: 'center',
      marginLeft: '42px',
      marginRight: '42px',
    },
    descriptionText: {
      color: 'black',
      fontSize: '14px',
    },
    link: {
      color: '#6386ef',
      textDecoration: 'underline',
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: '36px',
      paddingTop: '57px',
    },
    envelopeImage: {
      width: '93px',
      height: '71px',
    },
    buttonContainer: {
        marginTop: '20px',
        display: 'flex',
        // marginLeft: '20px',
        // marginRight: '20px',
        justifyContent: 'center',
        marginBottom: '25px',
    },
    carouselOn: {
        opacity: 0,
        height: '10px',
    },
    modalContainer: {
        position: 'relative',
    },
    taglineStyle: {
        opacity: 0,
        height: '10px',
    },

    infoBtn: {
        backgroundColor: '#2d3e4f',
    },
    unsaveB: {
        opacity: 0,
    },
    saveBon: {
        opacity: 0,
    }
};

class SingleActivityModal extends React.Component {
    constructor(props) {
        super(props);
        // this.onNavItemClick = this.onNavItemClick.bind(this);
        this.changeToSecondState = this.changeToSecondState.bind(this);
        this.changeToThirdState = this.changeToThirdState.bind(this);
        // this.removeFromSaved = this.removeFromSaved.bind(this);
        this.state = {
            show: false,
            tagline: false,
            secondState: true,
            thirdState: true,
        };
    }

    changeToSecondState() {
        this.setState({
            secondState: this.props.savedAlready,
      });
      // unsave logic needs to go here
    };

    changeToThirdState() {
        this.setState({
            thirdState: this.props.readyForCarousel,
            secondState: !this.props.secondState,
      });
    };

    // removeFromSaved() {
    //
    // };
    // put this in the unsave button's html: onClick={ this.removeFromSaved }

    render() {
        const { classes, showModal } = this.props;
        const { secondState, thirdState } = this.state;
        const date = "01-01-2001";
        const location = "Keck Lab";
        const price = "$0";

        let saveUnsaveText = "Unsave Event";
        if (this.state.thirdState) {
            saveUnsaveText = "Save Event";
        }
        // if saveUnsaveText = "Unsave Event" AND the button is clicked, the carousel and tagline need to go away

        const taglineClasses = classNames({
            [classes.taglineStyle]: this.state.secondState,
        });


        const carouselClasses = classNames({
            [classes.carouselOn]: this.state.thirdState,
        });

        const saveButtonClasses = classNames({
            [classes.buttonContainer]: true,
            [classes.unsaveB]: !this.state.thirdState,
        });

        const unSaveButtonClasses = classNames({
            [classes.buttonContainer]: true,
            [classes.saveBon]: this.state.thirdState,
        });


        let close = () => this.setState({ show: false });

        return (
            <div className="modalContainer" style={{ height: 50 }}>
                <Button
                    className = { classes.infoBtn }
                    bsStyle="primary"
                    bsSize="small"
                    onClick={() => this.setState({ show: true })}
                >
                    More Info
                </Button>

                <Modal
                    show={this.state.show}
                    onHide={close}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">World Series, Game 7: Dodgers vs. Astros</Modal.Title>
                        <h5>Date</h5>
                        <h5>Time</h5>
                        <h5>Location</h5>
                        <h5>Price</h5>
                    </Modal.Header>
                    <Modal.Body>

                        <div className={ classes.descriptionTextContainer }>
                          <span className={ classes.descriptionText }>
                            A Game 7 is one of the rarest treats in sports, and baseball fans have been lucky enough to witness three of the last four World Series go the distance! Not since the 1980s has the World Series gone to a winner-take-all game three times in a four-year span. The Houston Astros look to come into Los Angeles to win it all, while the Dodgers hope to hoist the trophy in front of their hometown.
                          </span>
                        </div>

                        <div className = { saveButtonClasses }>
                          <Button onClick={ this.changeToSecondState } bastyle="primary" bsSize="large">{ this.props.onRequestClose } Save Event </Button>
                        </div>

                        <div className={ unSaveButtonClasses }>
                          <Button bastyle="primary" bsSize="large">{ this.props.onRequestClose } Unsave </Button>
                        </div>

                        <div className={ taglineClasses }>
                            <Form horizontal>
                                <FormGroup controlId="formHorizontalEmail">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    Tagline:
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="Name" placeholder="What's your vibes?" />
                                  </Col>
                                </FormGroup>
                            </Form>

                            <div className={ classes.buttonContainer }>
                              <Button onClick={ this.changeToThirdState } bastyle="primary" bsSize="small"> { this.props.onRequestClose } Save Tagline </Button>
                            </div>

                            <div className={ classes.buttonContainer }>
                              <Button onClick={ this.changeToThirdState } bastyle="primary" bsSize="small">{ this.props.onRequestClose } Skip </Button>
                            </div>

                        </div>
                        <div className={ carouselClasses }>
                          <Carousel>
                              <Carousel.Item>
                                <img width={300} height={200} align="middle" src={eventExample}/>
                                <Carousel.Caption>
                                  <h3>User 1</h3>
                                  <p>"Looking forward to tonight's concert!"</p>
                                </Carousel.Caption>
                              </Carousel.Item>

                              <Carousel.Item>
                                <img width={200} height={200} alt="900x500" src={imageExample}/>
                                <Carousel.Caption>
                                  <h3>User 2</h3>
                                  <p>Anyone want to carpool?.</p>
                                </Carousel.Caption>
                              </Carousel.Item>
                          </Carousel>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


SingleActivityModal.propTypes = propTypes;
export default injectSheet(styles)(SingleActivityModal);

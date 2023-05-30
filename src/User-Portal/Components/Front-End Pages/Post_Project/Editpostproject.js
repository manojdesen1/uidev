import { React, useState } from "react"
import {
    Col,
    Form,
    Row,
    Button,
    Card,
    Dropdown,
    Image,
    Container, Modal
} from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import { Icon } from "@iconify/react";
import NavbarStandard from '../../Header/AdvanceHeader/NavbarStandard'
import { useDropzone } from 'react-dropzone';
import { getSize } from '../../../TemplateAssets/helpers/utils';
import cloudUpload from '../../../TemplateAssets/assets/cloud-upload.svg';
import CardDropdown from '../../../TemplateAssets/common/CardDropdown';

function Editpostproject() {

    const [cover, setCover] = useState();

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setCover(
                Object.assign(acceptedFiles[0], {
                    preview: URL.createObjectURL(acceptedFiles[0])
                })
            );
        }
    });

    // 

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };

    const handleCancel = () => {
        // Perform cancel action here
        console.log('Cancel project');
        setShowModal(false);
    };


    return (
        <>
            <Form>
                <Row className=" font-sans-serif">
                    {/* Header */}
                    <Col lg={12} className='mb-5' >
                        <NavbarStandard />
                    </Col>


                    <Container>
                        <Card className="mt-5">
                            <Card.Header as="h4" className='bg-light text-justify text-uppercase'>Note</Card.Header>
                            <Card.Body className="">
                                <ul>
                                    <li style={{ fontSize: '14px', width: '100%' }}>
                                        The customers who have described their requirements with better clarity while uploading the project have always connected with the right professionals and received better proposals, and hence completed their projects on time.

                                    </li>
                                    <li style={{ fontSize: '14px', width: '100%' }}>
                                        To make it even better, we recommend that you upload as much relevant information (pictures, documents, specifications, etc) as possible to give clarity.
                                    </li>

                                </ul>
                            </Card.Body>
                        </Card>

                        {/* Note */}

                        {/* Post A Project */}
                        <Card className="mb-3 mt-3">
                            <Card.Header as="h4" className='bg-light text-uppercase text-justify '>Edit Your Project</Card.Header>
                            <Card.Body className="bg-white">
                                <Row className="gx-2 gy-3">
                                    <p className='mt-2 me-2 fw-semibold' style={{ fontSize: '14px' }}>Select a relevant category so that freelancers can find your project</p>

                                    <Col lg={6} md={6} className=''>
                                        <Form.Group>
                                            <Form.Label className='text-700 text-uppercase'>
                                                category <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Select
                                                // value={form.category}
                                                required
                                                name="category"
                                            // onChange={(e) => { handleChange(e) }}
                                            >
                                                {/* <option value="">Select</option> */}
                                                <option value="">Attic</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} className=''>
                                        <Form.Group>
                                            <Form.Label className='text-700 text-uppercase'>
                                                sub-category <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Select
                                                required
                                                // value={form.sub_category}
                                                name="sub_category"
                                            // onChange={(e) => { handleChange(e) }}
                                            >
                                                {/* <option value="">Select</option> */}
                                                <option value="">Worktop</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} className='me-2 '>
                                        <Form.Group controlId="courseTitle">
                                            <Form.Label className='text-700 text-uppercase'>
                                                project title <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                value="WHITE ATTICA SUPERNATURAL QUARTZ"
                                                required
                                                name="project_title"
                                                // onChange={(e) => { handleChange(e) }}
                                                id="usr-prj-tit"
                                                placeholder="e.g I Want to Make a New Kitchen"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} className='me-2'>
                                        <Form.Group className="mb-3">
                                            <Form.Label className='text-700 text-uppercase'>Project Description <span className="text-danger">*</span> </Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                // value={form.project_description}
                                                value="White Attica Supernatural Quartz has a crisp white base featured with an
                                                 intricate veiny pattern. This quartz slab has a super sleek look in polished 
                                                 finish which 
                                                 is more enhanced by the distinct black veins which have been manufactured to look fit for classy modern settings. The deep dark veins create remarkable designs in your interior spaces. It feels like a dream come true 
                                                when installed in kitchens, baths, entryways, laundry and mudrooms, as well as a variety of other spaces in 
                                                both residential and commercial properties. This quartz's design is meant to create a timeless statement. Aside from worktops, these slabs are ideal for room walls, showers, backsplashes, and floors. Thickness: 20mm and 30mm Finish: Polished"
                                                required
                                                name="project_description"
                                                // onChange={(e) => { handleChange(e) }}
                                                placeholder="Need a Fabricator who's Specialize in this field"
                                                rows={8} />
                                            <p className='mt-2' style={{ fontSize: '12px' }}>Be Descriptive , Projects with good descriptions are more popular with our freelancers</p>
                                        </Form.Group>
                                    </Col>
                                    {/* Upload Samples */}
                                    <Col lg={12} className='me-2 mb-2 w-100'>
                                        <div >
                                            <Form.Label className='text-700 text-uppercase'>
                                                Upload Sample and Other Helpful
                                            </Form.Label>
                                            <div {...getRootProps({ className: 'dropzone-area py-6' })}>
                                                <input {...getInputProps({ multiple: false })} />
                                                <div className="fs--1">
                                                    <img src={cloudUpload} alt="" width={20} className="me-2" />
                                                    <span className="d-none d-lg-inline">
                                                        Drag your image here
                                                        <br />
                                                        or,{' '}
                                                    </span>
                                                    <Button variant="link" size="sm" className="p-0 fs--1">
                                                        Browse
                                                    </Button>
                                                </div>
                                            </div>
                                            {cover && (
                                                <div className="mt-3">
                                                    <div key={cover.path} className='d-flex btn-reveal-trigger align-items-center'>
                                                        <Image
                                                            rounded
                                                            width={40}
                                                            height={40}
                                                            src={cover.preview}
                                                            alt={cover.path}
                                                        />
                                                        <div className='mx-2 flex-1 text-truncate flex-column d-flex justify-content-between'>

                                                            <h6 className="text-truncate">{cover.path}</h6>
                                                            <div className="d-flex align-items-center position-relative">
                                                                <p className="mb-0 fs--1 text-400 line-height-1">
                                                                    <strong>{getSize(cover.size)}</strong>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <CardDropdown>
                                                            <div className="py-2">
                                                                <Dropdown.Item
                                                                    className="text-danger"
                                                                    onClick={() => setCover()}
                                                                >
                                                                    Remove
                                                                </Dropdown.Item>
                                                            </div>
                                                        </CardDropdown>
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                        <small className='d-block'><span className='fw-semibold me-2 text-danger'>Note:</span>Image can be uploaded of any dimension but we recommend you to upload image with dimension of 1024x1024 & its size must be less than 10MB.</small>
                                        <small className='d-block'><span className='fw-semibold me-2 text-danger'>Supported Format:</span><span className='fw-bold'>JPEG,PNG,PDF.</span></small>
                                    </Col>
                                    {/* Upload Samples */}
                                    <Col lg={6} md={6} className=''>
                                        <Form.Group>
                                            <Form.Label className='text-700 text-uppercase'>
                                                Budget Type <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Select
                                                // value={form.budget_type}
                                                required
                                                name="budget_type"
                                            // onChange={(e) => { handleChange(e) }}
                                            >
                                                {/* <option value="">Select</option> */}
                                                <option value="Fixed Price">Fixed Price   </option>
                                                <option value="No Idea">No Idea</option>
                                                <option value="Range"> Range</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} className=''>
                                        <Form.Group>
                                            <Form.Label className='text-700 text-uppercase'>
                                                Currency <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Select
                                                // value={form.currency}
                                                required
                                                name="currency"
                                            // onChange={(e) => { handleChange(e) }}
                                            >
                                                {/* <option value="">Select</option> */}
                                                <option value="£ GBP">£ GBP :</option>
                                                <option value="£ EUR">£ EUR</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} className=''>
                                        <Form.Group>
                                            <Form.Label className='text-700 text-uppercase'>
                                                Budget <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                // value={form.budget}
                                                value="200"
                                                required
                                                name="budget"
                                                // onChange={(e) => { handleChange(e) }}

                                                placeholder="£ 0"
                                                type="number"
                                            />
                                            {/* <div className='row'>
                                                <div className="col">
                                                    {form.budget_type == "No Idea" ? (
                                                        <>
                                                            <Form.Group className='mt-2'>
                                                                <Form.Label>Max Budget<span className="ms-1 text-danger">*</span></Form.Label>
                                                                <Form.Control className='d-block' value={form.max_budget} required name="max_budget" onChange={(e) => { handleChange(e) }} placeholder="£ 0" type="number" />
                                                            </Form.Group>
                                                        </>
                                                    ) : ("")}
                                                </div>
                                            </div> */}
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} className=''>
                                        <Form.Group className="mb-3">
                                            <Form.Label className='text-700 text-uppercase'>Project Location <span className="text-danger">*</span> </Form.Label>
                                            <Form.Control
                                                // value={form.location}
                                                value="Chennai"
                                                required
                                                name="location"
                                                // onChange={(e) => { handleChange(e) }}
                                                id="aipro-barcode-1"
                                                placeholder="Geo Locations" type='text'
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} className=''>
                                        <Form.Group>
                                            <Form.Label className='text-700 text-uppercase'>
                                                Post Code<span className="ms-1 text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                // value={form.postcode}
                                                value="CD23BX"
                                                required
                                                name="postcode"
                                                // onChange={(e) => { handleChange(e) }}
                                                type='text'
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} className=''>
                                        <Form.Group>
                                            <Form.Label className='text-700 text-uppercase'>
                                                Starting Date
                                            </Form.Label>
                                            <Form.Control
                                                // value={form.startdate}
                                                // value="01/01/2021"
                                                required
                                                name="startdate"
                                                // onChange={(e) => { handleChange(e) }}

                                                type='date'
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md="12">
                                        <Form.Group className='mb-3 mt-2'>
                                            <Form.Label className='text-700 d-block text-uppercase'>
                                                Project Visibility <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Check
                                                type='radio'
                                                id="radio-btn"
                                                // onChange={(e) => { handleChange(e) }}
                                                name="visibility"
                                                value="public"
                                                className='d-inline-block'
                                            >
                                                <Form.Check.Input name="visibility" type="radio" />
                                                <Form.Check.Label
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    <Icon width="24" height="24" className='ms-1' icon="gridicons:multiple-users" /> <span className="radio-opt">  Public <span className="optional">(All freelancers can view the project post and send proposals)</span></span>
                                                </Form.Check.Label>
                                            </Form.Check>
                                        </Form.Group>
                                        <Form.Group className=''>
                                            <Form.Check
                                                type='radio'
                                                id="radio-btn"
                                                // onChange={(e) => { handleChange(e) }}
                                                name="visibility"
                                                value="private"
                                                className='d-inline-block'
                                            >
                                                <Form.Check.Input name="visibility" type="radio" />
                                                <Form.Check.Label
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    <Icon icon="ph:lock-simple-fill" className='ms-1' width="24" height="24" /> <span className="radio-opt"> Private <span className="optional">(Only freelancers that you specifically invite can view the
                                                        <p className="opt-span">project post and send proposal)</p></span></span>
                                                </Form.Check.Label>
                                            </Form.Check>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} className=''>
                                        <Form.Group>
                                            <Form.Label className='text-700  text-uppercase'>
                                                Project Duration Time <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                // value={form.project_duration}
                                                value="2 Years"
                                                required
                                                name="project_duration"
                                                // onChange={(e) => { handleChange(e) }}
                                                type='text'
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} className=''>
                                        <Form.Group className='mb-3'>
                                            <Form.Label className='text-700  text-uppercase'>
                                                Expiry Date <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                // value={form.expire_date}
                                                // value="01/01/2023"
                                                required
                                                name="expire_date"
                                                // onChange={(e) => { handleChange(e) }}
                                                type='date'
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} className=''>
                                        <div className='d-flex justify-content-start'>
                                            <Button
                                                type="submit"
                                                className='d-block border-0 bg-success'
                                            >Post Project</Button>
                                            {/* <Link to="/projectlist"> */}
                                            <Button onClick={() => setShowModal(true)} className='d-block ms-3 border-0 bg-danger'>Cancel</Button>
                                            {/* </Link> */}
                                        </div>
                                        <h5 className="text-center text-danger fw-bold">Your Project has been expired....Please Post New Project!!!</h5>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card >
                        {/* Post A Project */}
                        <Modal show={showModal} onHide={handleClose}>
                            <Modal.Header >
                                <Modal.Title>Warning</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Are you sure you want to Exit?
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cancel
                                </Button>
                                <Button as={Link} to="/projectlist" variant="danger" onClick={handleClose}>
                                    Exit
                                </Button>

                            </Modal.Footer>
                        </Modal>
                        {/* </Col> */}
                    </Container>
                </Row>
            </Form >
        </>
    )
}
export default Editpostproject
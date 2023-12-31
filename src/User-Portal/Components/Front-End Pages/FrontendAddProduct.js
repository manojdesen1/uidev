import { useState, React, useEffect, useCallback, useRef } from 'react';
import { Col, Row, Card, Container, Button, Breadcrumb, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Dropdown, DropdownButton, Image } from 'react-bootstrap';
import Menubar from '../Menubar/Menubar';
import NavbarStandard from '../Header/AdvanceHeader/NavbarStandard'
// import SellerPortalHeader from '../Header/SellerPortalHeader'
import { Link, useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { uploadImage } from "../../../Services/ImageService";
import { createData, getAllData } from "../../../Services/ProxyService";
import toast, { Toaster } from 'react-hot-toast';
import { useDropzone } from 'react-dropzone';
import cloudUpload from '../../TemplateAssets/assets/cloud-upload.svg';
import { getSize } from '../../TemplateAssets/helpers/utils';
import CardDropdown from '../../TemplateAssets/common/CardDropdown';
import { Editor } from "@tinymce/tinymce-react";

const FrontendAddProduct = () => {

    const editorRef = useRef(null);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var _user = sessionStorage.getItem('user');
    var _json = JSON.parse(_user);

    //varient state
    const history = useHistory();
    const [variants, setVariants] = useState([]);
    console.log(variants)
    const [isEdit, setEditButton] = useState(false);
    const [editIndex, setEditVarientIndex] = useState(0);

    const [variant, setVarientObject] = useState({
        imageInx: null,
        color: "",
        size: "",
        finish_type: "",
        price: "",
        compare_at: "",
        handling_changes: "",
        sales_price: "",
        required_shipping: false,
        charge_taxes: false,
        sku: "",
        barcode: "",
        min_purchase_qty: "",
        quantity: "",
        track_inventory: false,
        remaining_quantity: 5,
    });

    console.log(Boolean(variant.required_shipping))

    //varient functionality
    const variantChange = (e) => {
        const _variant = { ...variant };
        _variant[e.target.name] = e.target.value;
        setVarientObject(_variant);
    };

    const handlechange1 = (e) => {
        setVarientObject({
            ...variant,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        });
    };

    const handleVariantSubmit = (event) => {
        event.preventDefault();
        var _form = {
            color: variant.color,
            size: variant.size,
            finish_type: variant.finish_type,
            shipping: {
                required_shipping: Boolean(variant.required_shipping),
                charge_tax: Boolean(variant.charge_tax),
            },
            pricing: {
                price: variant.price,
                compare_at: variant.compare_at,
                handling_changes: variant.handling_changes,
                sales_price: variant.sales_price,
                charge_taxes: Boolean(variant.charge_taxes),
            },
            inventory: {
                sku: variant.sku,
                barcode: variant.barcode,
                min_purchase_qty: variant.min_purchase_qty,
                quantity: variant.quantity,
                remaining_quantity: variant.remaining_quantity,
                track_inventory: Boolean(variant.track_inventory),
            },
            attachment: selectedFile[parseInt(variant.imageInx)]
        }

        var _variant = [...variants]
        if (isEdit == true) {
            _variant[editIndex] = _form;
        } else {
            _variant.push(_form);
        }
        setVariants(_variant);
        console.log('variant', variant);
        console.log('_form', _form);
        console.log('variants list', variants);
        resetVarientObject();
        setShow(false)

    };

    const resetVarientObject = () => {
        var _variant = {
            imageInx: null,
            color: "",
            size: "",
            finish_type: "",
            price: "",
            compare_at: "",
            handling_changes: "",
            sales_price: "",
            required_shipping: false,
            charge_taxes: false,
            sku: "",
            barcode: "",
            min_purchase_qty: "",
            quantity: "",
            track_inventory: false,
            remaining_quantity: 5,
        }

        setVarientObject(_variant);
        setEditButton(false);
        setEditVarientIndex(0);
    };

    const editVarient = (data, index) => {
        setShow(true)
        var _variant = {
            imageInx: data?.imageInx,
            color: data?.color,
            size: data?.size,
            finish_type: data?.finish_type,
            price: data?.pricing?.price,
            compare_at: data?.pricing?.compare_at,
            handling_changes: data?.pricing?.handling_changes,
            sales_price: data?.pricing?.sales_price,
            required_shipping: data?.shipping?.required_shipping,
            charge_taxes: data?.pricing?.charge_taxes,
            sku: data?.inventory?.sku,
            barcode: data?.inventory?.barcode,
            min_purchase_qty: data?.inventory?.min_purchase_qty,
            quantity: data?.inventory?.quantity,
            track_inventory: data?.inventory?.track_inventory,
            remaining_quantity: 5,

        }
        setVarientObject(_variant);
        setEditButton(true);
        setEditVarientIndex(index);
    };
    const variantremove = (index) => {
        var _variant = [...variants]
        _variant.splice(index, 1);
        setVariants(_variant);
    };

    // file upload --state
    const [selectedFile, setSelectedFile] = useState([]);
    const [actualFiles, setActualFile] = useState([]);
    const [uploadFiles, setUploadFile] = useState([]);
    // file upload --functionality
    const handleFileInput = (e) => {
        // const files = e.target.files;
        const _files = Array.from(e.target.files);
        const _urls = [...actualFiles];
        const fileArray = selectedFile;
        const upload = uploadFiles;
        _files.forEach((file) => {
            upload.push(file);
            const reader = new FileReader();

            reader.onload = () => {
                _urls.push(reader.result);
                setActualFile(_urls);
            };

            reader.readAsDataURL(file);
        });
        for (let i = 0; i < _files.length; i++) {
            fileArray.push({
                name: _files[i].name,
                url: `https://myproject-data.s3.eu-west-2.amazonaws.com/images/${_files[i].name}`,
                type: _files[i].type
            });
        }
        setSelectedFile(fileArray);
        setUploadFile(upload);
    };
    const uploadFile = () => {
        console.log('uploadFiles length', uploadFiles.length);
        for (let i = 0; i < uploadFiles.length; i++) {
            uploadImage(uploadFiles[i]);
        }
    };
    const removeImage = async (index) => {
        var selected = [...selectedFile];
        var actual = [...actualFiles];
        var uploads = [...uploadFiles];
        selected.splice(index, 1);
        actual.splice(index, 1);
        uploads.splice(index, 1);
        setActualFile(actual);
        setSelectedFile(selected);
        setUploadFile(uploads);
    }
    //product --state
    const [form, setProductForm] = useState({
        name: ""
    })
    const [productCategory, setproductCategory] = useState([])
    const [sellerList, setsellerList] = useState([])
    const [productTags, setproductTags] = useState([])
    const [selectedproductTags, setSelectedproductTags] = useState([])
    console.log(selectedproductTags)

    //product --functionality
    const handleChange = (e) => {
        const myData = { ...form };
        if (e.target.name == 'type') {
            var _pd = productCategory.find(x => x.value == e.target.value);
            var _type = {
                id: _pd ? _pd.id : 1,
                name: e.target.value
            }
            myData[e.target.name] = _type;
        } else {
            myData[e.target.name] = e.target.value;
        }
        setProductForm(myData);
    }
    const addProduct = async () => {
        const productdata = {
            seller_email: form.seller_email,
            name: form.name,
            // category: form.category,
            type: form.type,
            description: form.description,
            tags: selectedproductTags,
            policy: form.policy,
            shipping: form.shipping,
            pricing: { price: 100 },
            inventory: { quantity: 100 },
            handle: form.handle,
            meta_fields: {
                title: form.metatitle,
                description: form.metadescription,
            },
            attachments: selectedFile,
            // variant:form.tags,
            variant: variants,
            custom_fields: {},
            created_by: _json._id,
        }
        console.log(productdata);
        const response = await createData("admin/product/new", productdata);
        if (response.status === 201) {
            toast.success('Successfully Product Submitted');
            clearData();
            history.push('/dashboard-products');
        } else {
            toast.error('Something went wrong')
        }
        console.log(response)
    }

    const formsubmit = (e) => {
        if (variants.length === 0) {
            toast.error("You have to add at least one variant")
            e.preventDefault()

        } else {
            e.preventDefault()
            addProduct()
            uploadFile()
        }
    }

    //reset all
    const clearData = () => {
        setProductForm({
            name: "",
            category: "",
            seller_email: "",
            description: "",
            policy: "",
            handle: "",
            metatitle: "",
            metadescription: ""
        });
        setActualFile([]);
        setUploadFile([]);
        setSelectedFile([]);
        setVariants([]);
        // getProductTags();
        resetVarientObject();

    }

    const handleTagChange = (event, index) => {
        var _list = [
            {
                id: 1,
                value: event.target.value
            }
        ]
        var _tags = selectedproductTags;
        _tags[index].list = _list;
        setSelectedproductTags(_tags);
    }
    const getProductTags = async () => {
        const response = await getAllData('master/product_tags');
        setproductTags(response.data.master[0].data);
        var _selectList = [];
        response.data.master[0].data.forEach(x => {
            _selectList.push({ id: x.id, name: x.name, list: [] })
        })
        setSelectedproductTags(_selectList);
    }
    // others
    //  const [productCategory, setproductCategory] = useState([])
    const getProductCategories = async () => {
        const response = await getAllData('master/product_tags');
        setproductCategory(response.data.master[0].data[0].list);
    }

    useEffect(() => {
        getProductCategories()
        getProductTags()
    }, [])

    // Cancel Modal
    const [showModal1, setShowModal1] = useState(false);

    const handleClose1 = () => {
        setShowModal1(false);
    };
    const [showModal3, setShowModal3] = useState(false);

    const handleClose3 = () => {
        setShowModal3(false);
    };

    // Upload Img
    const [covers, setCovers] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        // Map the acceptedFiles to add the preview property
        const updatedCovers = acceptedFiles.map((file) => Object.assign(file, {
            preview: URL.createObjectURL(file)
        }));

        setCovers((prevCovers) => [...prevCovers, ...updatedCovers]);
    }, []);

    const removeCover = (cover) => {
        setCovers((prevCovers) => prevCovers.filter((c) => c !== cover));
    };


    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: true });
    // Upload Img


    return (
        <>

            <Row>
                <Col lg={12} className='mb-5'>
                    <NavbarStandard />
                </Col>
                <Col lg={12} className='container mt-4'>
                    {/* <Card className=''>
                        <Card.Body> */}

                    <Form onSubmit={(e) => { formsubmit(e) }}>
                        <Row>
                            <Col lg={7}>
                                <Card className='mt-3 '>
                                    <Card.Header className='bg-light'>
                                        <h1 className='mt-2'>Add Product</h1>
                                    </Card.Header>
                                    <Card.Body>
                                        <h2 className='mb-4'>Organization</h2>
                                        <Form.Group className='mb-3'>
                                            <Form.Label className="text-700 ">Trader Email<span className="ms-1 text-danger">*</span></Form.Label>
                                            <Form.Control value={form.seller_email} required name="seller_email" onChange={(e) => { handleChange(e) }} type="email" className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label className="text-700 ">Category<span className="ms-1 text-danger">*</span></Form.Label>
                                            <Form.Select value={form.type?.name} required name="type" onChange={(e) => { handleChange(e) }}>
                                                <option value="">Select</option>
                                                {productCategory?.map((data, key) => (
                                                    <option key={key} value={data.value}>
                                                        {data.value}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                                <Card className='mt-3 '>
                                    <Card.Body>
                                        <h2 className='mb-4'>Products Information</h2>

                                        <Form.Group className="mb-3">
                                            <Form.Label className="text-700 ">Product Name<span className="ms-1 text-danger">*</span></Form.Label>
                                            <Form.Control value={form.name} required name="name" onChange={(e) => { handleChange(e) }} type="text" className='w-100' />
                                        </Form.Group>
                                        <Row className="mb-3 g-3">
                                            <Form.Group className="mb-3">
                                                <Form.Label className="text-700 ">Description </Form.Label>
                                                {/* <Form.Control value={form.description} required name="description" onChange={(e) => { handleChange(e) }} as="textarea" placeholder='Tag Your Description....' rows={8} /> */}
                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    initialValue=""
                                                    init={{

                                                        height: 200,
                                                        menubar: false,
                                                        // plugins: [
                                                        //     'advlist autolink lists link image charmap print preview anchor',
                                                        //     'searchreplace visualblocks code fullscreen',
                                                        //     'insertdatetime media table paste code help wordcount'
                                                        // ],
                                                        toolbar: 'undo redo | formatselect | ' +
                                                            'bold italic  | alignleft aligncenter ' +
                                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                                            'removeformat ',
                                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                    }}
                                                />
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3 g-3">
                                            <Form.Group className="mb-3">
                                                <Form.Label className="text-700 ">Return Policy<span className='ms-1 text-danger'>*</span></Form.Label>
                                                {/* <Form.Control value={form.policy} required name="policy" onChange={(e) => { handleChange(e) }} as="textarea" placeholder='Tag Your Policy....' rows={8} /> */}
                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    initialValue=""
                                                    init={{

                                                        height: 200,
                                                        menubar: false,
                                                        // plugins: [
                                                        //     'advlist autolink lists link image charmap print preview anchor',
                                                        //     'searchreplace visualblocks code fullscreen',
                                                        //     'insertdatetime media table paste code help wordcount'
                                                        // ],
                                                        toolbar: 'undo redo | formatselect | ' +
                                                            'bold italic  | alignleft aligncenter ' +
                                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                                            'removeformat ',
                                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                    }}
                                                />
                                            </Form.Group>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <Button onClick={handleShow} className='m-3 bg-transparent text-primary'>+ Add Variant</Button>
                                <div>
                                    {variants.map((data, index) => (
                                        <Card className=''>
                                            <Card.Header className='d-flex justify-content-end bg-light'>
                                                <button style={{ fontSize: '14px' }} className='btn me-1 border-secondary bg-transparent' type="button" onClick={() => editVarient(data, index)} >Edit</button>
                                                <button onClick={() => setShowModal3(true)} type="button" style={{ fontSize: '14px' }} className='btn me-1 border-secondary bg-transparent'>Remove</button>
                                            </Card.Header>
                                            <Card.Body>
                                                <p><span className='fw-semibold'>Colour : </span>{data?.color}</p>
                                                <p><span className='fw-semibold'>Size : </span>{data?.size} </p>
                                                <p><span className='fw-semibold'>Finish Type : </span>{data?.finish_type}</p>
                                                <p><span className='fw-semibold'>Quantity : </span>{data?.quantity}</p>
                                                <p><span className='fw-semibold'>Inventory : </span>{data?.inventory?.sku}</p>
                                                <p><span className='fw-semibold'>Price : </span>£ {data?.pricing?.price}</p>
                                                <p><span className='fw-semibold'>SKU: </span></p>
                                            </Card.Body>
                                        </Card>
                                    ))}
                                </div>

                                <div>

                                    {/* <Flex justifyContent={between}> */}
                                    <div className='d-flex justify-content-between'>
                                        <Modal
                                            show={show}
                                            onHide={() => setShow(false)}
                                            dialogClassName="modal-xl modal-90w"
                                            backdrop="static"
                                            aria-labelledby="example-custom-modal-styling-title"
                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title className='mb-0' id="example-custom-modal-styling-title">
                                                    <h1>Variant Details</h1>
                                                    </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Row>
                                                    <Col lg={6}>
                                                        <Card className='mt-3  me-3'>
                                                            <Card.Body>
                                                                <div className='d-flex justify-content-between'>
                                                                    <h2 className='mb-3'>Variants</h2>

                                                                </div>
                                                           <h5 className='mb-3'>Options</h5>
                                                                <Row className="mb-3 g-3">
                                                                    <Form.Group as={Col} className='mb-3'>

                                                                        {/* <Form.Select className='w-75'>
                                                                                    <option>Size</option>
                                                                                    <option>Colour</option>
                                                                                    <option>Material</option>
                                                                                    <option>Style</option>
                                                                                </Form.Select> */}
                                                                        <Form.Label className="text-700 ">Colour<span className="ms-1 text-danger">*</span></Form.Label>
                                                                    </Form.Group>
                                                                    <Form.Group as={Col} className='mb-3'>
                                                                        <Form.Control value={variant.color} required name="color" onChange={(e) => { variantChange(e) }} type="text" placeholder='Enter tags' className='w-100' />
                                                                    </Form.Group>
                                                                </Row>
                                                                <Row className="mb-3 g-3">
                                                                    <Form.Group as={Col} className='mb-3'>
                                                                        <Form.Label className="text-700 ">Size<span className="ms-1 text-danger">*</span></Form.Label>
                                                                        {/* <Form.Select className='w-75'>
                                                                                    <option>Size</option>
                                                                                    <option>Colour</option>
                                                                                    <option>Material</option>
                                                                                    <option>Style</option>
                                                                                </Form.Select> */}
                                                                    </Form.Group>
                                                                    <Form.Group as={Col} className='mb-3'>
                                                                        <Form.Control value={variant.size} required name="size" onChange={(e) => { variantChange(e) }} type="text" placeholder='Enter tags' className='w-100' />
                                                                    </Form.Group>
                                                                </Row>
                                                                <Row className="mb-3 g-3">
                                                                    <Form.Group as={Col} className='mb-3'>
                                                                        <Form.Label className="text-700 ">Finish Type<span className="ms-1 text-danger">*</span></Form.Label>
                                                                        {/* <Form.Select className='w-75'>
                                                                                    <option>Size</option>
                                                                                    <option>Colour</option>
                                                                                    <option>Material</option>
                                                                                    <option>Style</option>
                                                                                </Form.Select> */}
                                                                    </Form.Group>
                                                                    <Form.Group as={Col} className='mb-3'>
                                                                        <Form.Control value={variant.finish_type} required name="finish_type" onChange={(e) => { variantChange(e) }} type="text" placeholder='Enter tags' className='w-100' />
                                                                    </Form.Group>
                                                                </Row>
                                                                {/* <Button className='bg-transparent text-primary'>+ Add Option</Button> */}
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col lg={5}>
                                                        <Card className='mt-3 me-3'>
                                                            <Card.Body>
                                                                <h2 className='mb-4'>Pricing</h2>
                                                                <Form.Group className='mb-3'>
                                                                    <Form.Label className="text-700 ">Pricing<span className='ms-1 text-danger'>*</span></Form.Label>
                                                                    <InputGroup className="mb-3">
                                                                        <Button>
                                                                            £
                                                                        </Button>
                                                                        <Form.Control value={variant.price} required name="price" onChange={(e) => { variantChange(e) }} placeholder='0.00' type="number" aria-label="Text input with dropdown button" />
                                                                    </InputGroup>
                                                                </Form.Group>
                                                                <Form.Group className='mb-3'>
                                                                    <Form.Label className="text-700 ">Compare Price<span className='ms-1 text-danger'>*</span></Form.Label>
                                                                    <InputGroup className="mb-3">
                                                                        <Button>
                                                                            £
                                                                        </Button>
                                                                        <Form.Control value={variant.compare_at} required name="compare_at" onChange={(e) => { variantChange(e) }} type="number" />
                                                                    </InputGroup>
                                                                </Form.Group>
                                                                <Form.Group className='mb-3'>
                                                                    <Form.Label className="text-700 ">Handling Charges<span className='ms-1 text-danger'>*</span></Form.Label>
                                                                    <InputGroup className="mb-3">
                                                                        <Button>
                                                                            £
                                                                        </Button>
                                                                        <Form.Control value={variant.handling_changes} required name="handling_changes" onChange={(e) => { variantChange(e) }} type="number" />
                                                                    </InputGroup>
                                                                </Form.Group>
                                                                <Form.Group className='mb-3'>
                                                                    <Form.Label className="text-700 ">Sales Price<span className='ms-1 text-danger'>*</span></Form.Label>
                                                                    <InputGroup className="mb-3">
                                                                        <Button>
                                                                            £
                                                                        </Button>
                                                                        <Form.Control disabled value={variant.sales_price} required name="sales_price" onChange={(e) => { variantChange(e) }} type="number" />
                                                                    </InputGroup>
                                                                </Form.Group>
                                                                <Form.Group className='mb-3'>
                                                                    <Row>
                                                                        <Col md={6}>
                                                                            <Form.Group>
                                                                                <Form.Check>
                                                                                    <Form.Check.Input
                                                                                        type="checkbox"
                                                                                        style={{ cursor: 'pointer' }}
                                                                                    />
                                                                                    <Form.Check.Label>
                                                                                        Shipping Requires
                                                                                    </Form.Check.Label>
                                                                                </Form.Check>
                                                                            </Form.Group>
                                                                        </Col>
                                                                        <Col md={6}>
                                                                            <Form.Group>
                                                                                <Form.Check>
                                                                                    <Form.Check.Input
                                                                                        type="checkbox"
                                                                                        checked={variant.charge_taxes}
                                                                                        name="charge_taxes"
                                                                                        onChange={handlechange1}
                                                                                        id="inventoryCheckbox"
                                                                                        style={{ cursor: 'pointer' }}
                                                                                    />
                                                                                    <Form.Check.Label>
                                                                                        Charge Taxes on this products
                                                                                    </Form.Check.Label>
                                                                                </Form.Check>
                                                                            </Form.Group>
                                                                        </Col>
                                                                    </Row>
                                                                </Form.Group>
                                                            </Card.Body>
                                                        </Card>
                                                        <Card className='mt-3 me-3'>
                                                            <Card.Body>
                                                                <h2 className='mb-4'>Inventory</h2>
                                                                <Form.Group className='mb-3'>
                                                                    <Form.Label className="text-700 ">SKU<span className='ms-1 text-danger'>*</span></Form.Label>
                                                                    <Form.Control value={variant.sku} required name="sku" onChange={(e) => { variantChange(e) }} className='w-100' type="text" placeholder='eg.324812302' />
                                                                </Form.Group>
                                                                <Form.Group className='mb-3'>
                                                                    <Form.Label className="text-700 ">Barcode<span className='ms-1 text-danger'>*</span></Form.Label>
                                                                    <Form.Control
                                                                        value={variant.barcode} required name="barcode" onChange={(e) => { variantChange(e) }}
                                                                        className='w-100'
                                                                        type="text"
                                                                    />
                                                                </Form.Group>
                                                                <Form.Group className='mb-3'>
                                                                    <Form.Label className="text-700 ">Minimum Purchase Quantity<span className='ms-1 text-danger'>*</span></Form.Label>
                                                                    <Form.Control value={variant.min_purchase_qty} required name="min_purchase_qty" onChange={(e) => { variantChange(e) }} type="number" className='w-100' />
                                                                </Form.Group>
                                                                <Form.Group className='mb-3'>
                                                                    <Form.Label className="text-700 ">Quantity<span className='ms-1 text-danger'>*</span></Form.Label>
                                                                    <Form.Control value={variant.quantity} required name="quantity" onChange={(e) => { variantChange(e) }} type="number" className='w-100' />
                                                                </Form.Group>
                                                                <Form.Group className='mb-3'>
                                                                    <Form.Check>
                                                                        <Form.Check.Input
                                                                            type="checkbox"
                                                                            checked={variant.track_inventory}
                                                                            name="track_inventory"
                                                                            onChange={handlechange1}
                                                                            id="inventoryCheckbox"
                                                                            style={{ cursor: 'pointer' }}
                                                                        />
                                                                        <Form.Check.Label>
                                                                            Track this Product's Inventory
                                                                        </Form.Check.Label>
                                                                    </Form.Check>
                                                                </Form.Group>
                                                                <Button type='submit' onClick={(e) => { handleVariantSubmit(e) }} className='btn bg-success border border-0'>Submit</Button>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </Modal.Body>
                                        </Modal>

                                    </div>
                                    {/* </Flex> */}
                                </div>
                            </Col>
                            <Col lg={5}>

                                <Card className='mt-3'>
                                    <Card.Body>
                                        {/* <Flex justifyContent={between}> */}
                                        <h2 className='mb-4'>Media</h2>

                                        {/* </Flex> */}
                                        <div className='mt-3 border-secondary w-100'>
                                            {/* <small className='d-block text-align-center'>
                                                Drag and Drop
                                                Your Files Here
                                            </small>
                                            <label htmlFor="select-basic" >
                                                <Button className='mt-3 btn text-light btn-outline-secondary' onClick={() => document.getElementById('select-basic').click()}>Browse Files</Button>
                                                <input
                                                    name="attachments"
                                                    multiple
                                                    onChange={handleFileInput}
                                                    type="file"
                                                    id="select-basic"
                                                    accept="image/*"
                                                    style={{ display: "none" }}
                                                />
                                            </label>
                                            {actualFiles.map((file, index) => (
                                                <>
                                                    <div className="row bg-pre mt-3">
                                                        <div className="col-4">
                                                            <img src={file} width="50px" height="50px" className="pro-pre" />
                                                        </div>
                                                        <div className="col-4 fil-name">{selectedFile[index]?.name}</div>
                                                        <div className="col-4 ">
                                                            <div className="m-3 text-end">
                                                                <i className="ri-close-line upload-img-close3" onClick={(e) => { removeImage(index) }}></i>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </>
                                            ))} */}
                                            {/* Upload Samples */}
                                            <Col lg={12} className='me-2 mb-2 w-100'>
                                                <div {...getRootProps({ className: 'dropzone-area py-6' })}>
                                                    <input {...getInputProps()} multiple />
                                                    <div className="fs--1">
                                                        <img src={cloudUpload} alt="" width={20} className="me-2" />
                                                        <span className="d-none d-lg-inline">
                                                            Drag your images here
                                                            <br />
                                                            or,{' '}
                                                        </span>
                                                        <Button variant="link" size="sm" className="p-0 fs--1">
                                                            Browse
                                                        </Button>
                                                    </div>
                                                </div>

                                                {covers.length > 0 &&
                                                    <div className="mt-3">
                                                        {covers.map((cover) => (
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
                                                                    <h6 className="mt-2 text-primary">01/05/2023</h6>
                                                                </div>
                                                                <CardDropdown>
                                                                    <div className="py-2">
                                                                        <Dropdown.Item
                                                                            className="text-danger"
                                                                            onClick={() => removeCover(cover)}
                                                                        >
                                                                            Remove
                                                                        </Dropdown.Item>
                                                                    </div>
                                                                </CardDropdown>
                                                            </div>
                                                        ))}
                                                    </div>
                                                }

                                                <small style={{ fontSize: '14px' }} className='d-block  mt-2 mb-2'><span className='fw-semibold me-2 text-danger'>Note:</span>Image can be uploaded of any dimension but we recommend you to upload image with dimension of 1024x1024 & its size must be less than 10MB.</small>
                                                <small style={{ fontSize: '14px' }} className='d-block'><span className='fw-semibold me-2 text-danger'>Supported Format:</span><span className='fw-bold'>JPEG,PNG,PDF.</span></small>
                                            </Col>
                                            {/* Upload Samples */}
                                        </div>
                                    </Card.Body>
                                </Card>

                                <Card className='mt-3'>
                                    <Card.Body>
                                        <h2 className='mb-4'>Products Handle and Metafields</h2>
                                        <Form.Group className='mb-4'>
                                            <Form.Label className="text-700 ">
                                                Products handle<span className='ms-1 text-danger'>*</span>
                                            </Form.Label>
                                            <Form.Control value={form.handle} required name="handle" onChange={(e) => { handleChange(e) }} type="text" placeholder='' className='w-100' />
                                        </Form.Group>
                                        <h2 className='mb-4'>Products Metafields</h2>
                                        <Form.Group className='mb-3'>
                                            <Form.Label className="text-700 ">
                                                Title Tag Meta Field<span className='ms-1 text-danger'>*</span>
                                            </Form.Label>
                                            <Form.Control value={form.metatitle} required name="metatitle" onChange={(e) => { handleChange(e) }} type="text" placeholder='' className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label className="text-700 ">
                                                Description Tag Meta Field<span className='ms-1 text-danger'>*</span>
                                            </Form.Label>
                                            <Form.Control value={form.metadescription} required name="metadescription" onChange={(e) => { handleChange(e) }} as={"textarea"} rows={1} maxLength={300} className='resize-none w-100' />
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                                <Card className='mt-3'>

                                    <Card.Body>
                                        <h2 className='mb-4'>Products Tag</h2>
                                        {productTags.map((x, i) => {
                                            const defaultSelectedValues = selectedproductTags[i]?.list || [];
                                            console.log(defaultSelectedValues)
                                            return <Form.Group className='mb-3'>
                                                <Form.Label className="text-700 ">{x?.name}<span className='ms-1 text-danger'>*</span></Form.Label>
                                                {<Form.Control className="w-100" value={selectedproductTags[i]?.list[0]?.value} onChange={(e) => { handleTagChange(e, i) }} placeholder={`Enter ${x?.name}`} name={`tagname_${i}`} id={`tagname_${i}`} type="text" />}
                                            </Form.Group>
                                        })}

                                        {/* <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 ">
                                                        Category
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 ">
                                                        Colour
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 ">
                                                        Finish Type
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 ">
                                                        Length
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 ">
                                                        Width
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 ">
                                                        Thickness
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 ">
                                                        Pattern
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 ">
                                                        Stock Location
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 ">
                                                        Origin
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 ">
                                                        Offers
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Row>
                                <Col className='mt-3'>
                                    <Link to='/dashboard-products'>
                                        <Button type='submit' className='mb-3 btn text-light bg-success border-0'>Add Products</Button>
                                    </Link>

                                    <Button onClick={() => setShowModal1(true)} className='mb-3 btn text-light border-0 ms-3 bg-danger '>Cancel</Button>

                                    {/* Modal Cancel Pop-up */}
                                    <Modal show={showModal1} onHide={handleClose1}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Warning</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <p className=''>
                                                Are you sure you want to cancel without adding product ?
                                            </p>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button className='me-2' variant="secondary" onClick={handleClose1}>
                                                No
                                            </Button>
                                            <Link to="/dashboard-products">
                                                <Button variant="danger" onClick={handleClose1}>
                                                    Yes
                                                </Button>
                                            </Link>
                                        </Modal.Footer>
                                    </Modal>
                                    {/*  */}
                                    {/* Modal Warning Pop-up to Remove Variant Details */}
                                    <Modal show={showModal3} onHide={handleClose3}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Warning</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <p className=''>
                                                Are you sure you want to remove the variant details ?
                                            </p>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button className='me-2' variant="secondary" onClick={handleClose3}>
                                                No
                                            </Button>
                                            {variants.map((data, index) => (
                                                <Button variant="danger" onClick={() => { variantremove(index) }}>
                                                    Yes
                                                </Button>
                                            ))}
                                        </Modal.Footer>
                                    </Modal>
                                    {/*  */}
                                </Col>
                            </Row>
                        </Row>
                    </Form>

                    {/* </Card.Body >
                    </Card> */}
                </Col>
                <Toaster />
            </Row>
            <Col lg={12}>
                <Footer />
            </Col>

        </>
    )
}
export default FrontendAddProduct;
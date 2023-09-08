const UserPost = () => {
    return (
        <Form className="d-flex mt-3 align-items-center gap-2" onSubmit={addComment}>
            <img
                className="p-1 img-40 rounded-circle border border-dark border-opacity-10"
                src={user.avatar}
                alt="Logo"
            />

            <Form.Group className="w-100">
                <Form.Control
                    className="bg-light"
                    type="text"
                    placeholder="Hãy viết gì đó..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!content}>
                <FontAwesomeIcon icon={faPaperPlane} />
            </Button>
        </Form>
    );
};

export default UserPost;

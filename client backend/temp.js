User
    id
    username
    password
    name

Post
    id
    title
    description
    keywords

    banner 
    half_banner
    square_banner

    square_thumbnail

    big_card
    half_big_card

    card
    half_card


    short_content
    content
    category
    tags []
    comments []
    created_by
    created_at

Comment
    id
    content
    parent_cmt_id
    user {
        name
        email
    }
    created_at
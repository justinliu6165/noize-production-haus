import { createSlice } from '@reduxjs/toolkit';

const TAGS = {
    VIDEO: "Video",
    PHOTO: "Photo",
    DIGITAL: "Digital"
}

const initialState = {
    caseStudies: [
        {
            id: 1,
            title: "Sip & Sit Promo Video",
            slug: "sip-and-sit-promo-video",
            description: "<p>[Company A] asked us to provide a beautiful stunnning advert for [insert concept]. We went out of bounds on the imagination and overboard on the special effects because that’s what we do.</p>",
            image: {
                src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                alt: "Blah Blah"
            },
            tags: [TAGS.VIDEO, TAGS.DIGITAL],
            metaInfo: {
                director: {
                    name: "Jamie Kirby",
                    link: ""
                },
                music: {
                    name: "Music artist name",
                    link: ""
                },
                editor: {
                    name: "Editor name",
                    link: ""
                },
                client: {
                    name: "Client name",
                    link: ""
                },
            },
            videoEmbed: "https://player.vimeo.com/video/473243475?h=d80f671141",
            dateCreated: "",
            datePublished: ""
        },
        {
            id: 2,
            title: "Toyota Helix",
            slug: "toyota-helix",
            description: "<p>[Company A] asked us to provide a beautiful stunnning advert for [insert concept]. We went out of bounds on the imagination and overboard on the special effects because that’s what we do.</p>",
            image: {
                src: "https://images.unsplash.com/photo-1534961165765-5c9795af911b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=407&q=80",
                alt: "Blah Blah"
            },
            tags: [TAGS.VIDEO, TAGS.DIGITAL],
            metaInfo: {
                director: {
                    name: "Jamie Kirby",
                    link: ""
                },
                music: {
                    name: "Music artist name",
                    link: ""
                },
                editor: {
                    name: "Editor name",
                    link: ""
                },
                client: {
                    name: "Client name",
                    link: ""
                },
            },
            videoEmbed: "https://player.vimeo.com/video/610190025?h=f521a7e1ee",
            dateCreated: "",
            datePublished: ""
        },
        {
            id: 3,
            title: "Bright Nights",
            slug: "bright-nights",
            description: "<p>[Company A] asked us to provide a beautiful stunnning advert for [insert concept]. We went out of bounds on the imagination and overboard on the special effects because that’s what we do.</p>",
            image: {
                src: "https://images.unsplash.com/photo-1522590482740-d2f7f4240b35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80",
                alt: "Blah Blah"
            },
            tags: [TAGS.VIDEO, TAGS.DIGITAL],
            metaInfo: {
                director: {
                    name: "Jamie Kirby",
                    link: ""
                },
                music: {
                    name: "Music artist name",
                    link: ""
                },
                editor: {
                    name: "Editor name",
                    link: ""
                },
                client: {
                    name: "Client name",
                    link: ""
                },
            },
            videoEmbed: "https://player.vimeo.com/video/610190025?h=f521a7e1ee",
            dateCreated: "",
            datePublished: ""
        },
        {
            id: 4,
            title: "Down to the wire",
            slug: "down-to-the-wire",
            description: "<p>[Company A] asked us to provide a beautiful stunnning advert for [insert concept]. We went out of bounds on the imagination and overboard on the special effects because that’s what we do.</p>",
            image: {
                src: "https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                alt: "Blah Blah"
            },
            tags: [TAGS.VIDEO, TAGS.DIGITAL],
            metaInfo: {
                director: {
                    name: "Jamie Kirby",
                    link: ""
                },
                music: {
                    name: "Music artist name",
                    link: ""
                },
                editor: {
                    name: "Editor name",
                    link: ""
                },
                client: {
                    name: "Client name",
                    link: ""
                },
            },
            videoEmbed: "https://player.vimeo.com/video/610190025?h=f521a7e1ee",
            dateCreated: "",
            datePublished: ""
        },
        {
            id: 5,
            title: "Through the wastelands",
            slug: "through-the-wastelands",
            description: "<p>[Company A] asked us to provide a beautiful stunnning advert for [insert concept]. We went out of bounds on the imagination and overboard on the special effects because that’s what we do.</p>",
            image: {
                src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                alt: "Blah Blah"
            },
            tags: [TAGS.VIDEO, TAGS.DIGITAL],
            metaInfo: {
                director: {
                    name: "Jamie Kirby",
                    link: ""
                },
                music: {
                    name: "Music artist name",
                    link: ""
                },
                editor: {
                    name: "Editor name",
                    link: ""
                },
                client: {
                    name: "Client name",
                    link: ""
                },
            },
            videoEmbed: "https://player.vimeo.com/video/610190025?h=f521a7e1ee",
            dateCreated: "",
            datePublished: ""
        }
    ]
};

export const counterSlice = createSlice({
    name: 'carousel',
    initialState,
});

export const selectCaseStudies = (state) => state.cases.caseStudies;

export default counterSlice.reducer;

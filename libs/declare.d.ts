declare namespace API {

    export interface Navigation {
        title: string,
        link: string
    }

    export interface NavigationList {
        navigation: Navigation[]
    }

    export interface MainFrame {
        mainFrame: MainFrameObj
    }
    
    export interface MainFrameObj {
        subtitle: string;
        heading: string;
        button1: {
            title: string,
            link: string
        };
        button2: {
            title: string,
            link: string
        };
    }

    export interface Info {
        image: string,
        title: string,
        description: string
    }

    export interface InfoList {
        info: Info[]
    }

    export interface Labels {
        title: string,
        subtitle: string,
    }

    export interface LabelsList {
        labels: Labels[]
    }

    export interface Comments {
        rating: number,
        text: string,
        user: {
            image: string,
            name: string,
            profession: string
        }
    }

    export interface CommentsList {
        comments: Comments[]
    }
}
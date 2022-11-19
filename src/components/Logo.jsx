export default function Logo(props) {
    const { website, username } = props;
    
    if(website === "LinkedIn") {
        return (
            <a href={`https://www.linkedin.com/in/${username}`} target="_blank">
                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn Logo"/>
            </a>
        );
    }
    else if(website === "GitHub") {
        return (
            <a href={`https://www.github.com/${username}`} target="_blank">
                <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub Logo"/>
            </a>
        );
    }
    else if(website === "Twitter") {
        return (
            <a href={`https://www.twitter.com/${username}`} target="_blank">
                <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter Logo"/>
            </a>
        );
    }
    else if(website === "Instagram") {
        return (
            <a href={`https://www.instagram.com/${username}`} target="_blank">
                <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="Instagram Logo"/>
            </a>
        );
    }
    else if(website === "Facebook") {
        return (
            <a href={`https://www.facebook.com/${username}`} target="_blank">
                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook Logo"/>
            </a>
        );
    }
    else if(website === "Mail") {
        return (
            <a href={`mailto:${username}`} target="_blank">
                <img src="https://img.icons8.com/color/48/000000/gmail.png" alt="Gmail Logo"/>
            </a>
        );
    }
    else {
        return (
            <div>Invalid website</div>
        );
    }
}


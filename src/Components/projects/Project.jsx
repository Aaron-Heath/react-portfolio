import ProjectCard from "./ProjectCard";

class Project {
    constructor(title, description, languages=[],tags=[], repository,screenshot, link=null) {
        this.title = title;
        this.description = description;
        this.languages = languages;
        this.tags = tags;
        this.repository = repository;
        this.screenshot = screenshot;
        this.link = link;
    }



}
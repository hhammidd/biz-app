https://www.youtube.com/watch?v=S5dzfuh3t8U&list=PLjC4UKOOcfDTyLPFIjZfTYHkoGJdVCXzs&ab_channel=CodAffection
--✗ npm install --legacy-peer-deps

* ng serve --port 4201
* 
# Push Created Image to remote docker hub
* Login to remote docker: `docker login`
* Create remote tag image for app: ` docker image tag <app-name>:<app-version> <remote-repo-name>/<app-name>:<app-version>` 
    * * example: ` docker image tag tech-search:1 hhssaaffii/tech-search:1` 
* See the image created locally: `docker image ls` 

* Push to remote: `docker push <remote-repository-name>/tech-search:1` 
    * * for example: `docker push hhssaaffii/tech-search:1`
 
# Pull the image in server
*  `docker pull hhssaaffii/tech-search:2`


* Should be connected to micro-geo app

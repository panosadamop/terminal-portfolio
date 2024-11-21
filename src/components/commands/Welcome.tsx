import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        

______                       _       _   _                       
| ___ \\                     (_)     | | (_)                      
| |_/ /_ _ _ __   __ _  __ _ _  ___ | |_ _ ___                   
|  __/ _\` | '_ \\ / _\` |/ _\` | |/ _ \\| __| / __|                  
| | | (_| | | | | (_| | (_| | | (_) | |_| \\__ \\                  
\\_|  \\__,_|_| |_|\\__,_|\\__, |_|\\___/ \\__|_|___/                  
                        __/ |                                    
                       |___/                                     
  ___      _                                         _           
 / _ \\    | |                                       | |          
/ /_\\ \\ __| | __ _ _ __ ___   ___  _ __   ___  _   _| | ___  ___ 
|  _  |/ _\` |/ _\` | '_ \` _ \\ / _ \\| '_ \\ / _ \\| | | | |/ _ \\/ __|
| | | | (_| | (_| | | | | | | (_) | |_) | (_) | |_| | | (_) \\__ \\
\\_| |_/\\__,_|\\__,_|_| |_| |_|\\___/| .__/ \\___/ \\__,_|_|\\___/|___/
                                  | |                            
                                  |_|                            

         `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
______                       _       _   _                       
| ___ \\                     (_)     | | (_)                      
| |_/ /_ _ _ __   __ _  __ _ _  ___ | |_ _ ___                   
|  __/ _\` | '_ \\ / _\` |/ _\` | |/ _ \\| __| / __|                  
| | | (_| | | | | (_| | (_| | | (_) | |_| \\__ \\                  
\\_|  \\__,_|_| |_|\\__,_|\\__, |_|\\___/ \\__|_|___/                  
                        __/ |                                    
                       |___/                                     
  ___      _                                         _           
 / _ \\    | |                                       | |          
/ /_\\ \\ __| | __ _ _ __ ___   ___  _ __   ___  _   _| | ___  ___ 
|  _  |/ _\` |/ _\` | '_ \` _ \\ / _ \\| '_ \\ / _ \\| | | | |/ _ \\/ __|
| | | | (_| | (_| | | | | | | (_) | |_) | (_) | |_| | | (_) \\__ \\
\\_| |_/\\__,_|\\__,_|_| |_| |_|\\___/| .__/ \\___/ \\__,_|_|\\___/|___/
                                  | |                            
                                  |_|                            

          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my personal website. (Version 1.0.1)</div>
        <Seperator>----</Seperator>
        <div>
          You can check me repositories at my{" "}
          <Link href="https://github.com/panosadamop/" target={"_blank"}>
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;

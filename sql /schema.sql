CREATE DATABASE ART 

CREATE TABLE works (
    id serial PRIMARY KEY,
    artist text,
    worksimg image,
    title text,
    description text,
    medium text,
    size text,
    year int
);

CREATE TABLE users (
    id serial PRIMARY KEY,
    name text,
    email text,
    password text
);

CREATE TABLE comments (
    id serial PRIMARY KEY,
    user_id int REFERENCES users(id),
    img_id int REFERENCES works(id),
    comment text
);

INSERT INTO
    works (
        worksimg,
        title,
        description,
        medium,
        size,
        year,
        artist
    )
VALUES
    (
        'Wangechi Mutu',
        '',
        'Ghouls On My Back Celebrate Murder',
        'Wangechi Mutu uses collage as a means of both physically and conceptually bringing layered depth to her work. 
        Using images cut from fashion magazines, National Geographic, and books about African art, Mutu pieces together figures which are 
        both elegant and perverse. Individual body parts comprised of found ’objects’ are made to seem like odd prosthetics glued over torsos 
        and limbs drawn in ink.',
        'Mixed media on mylar',
        '90 x 61cm',
        2003
    ) (
        'Wangechi Mutu',
        '',
        'Mask',
        'Wangechi Mutu’s Mask draws provocative comparison between archaeology and sexual fetishism. 
        Pasted over the photo of a museum relic, her saucy model becomes a temptress of caricatured exotica. 
        Encasing the woman’s body and face in a cut out of a voodoo sculpture, Mutu envelops her cover girl as a product of typecast 
        desire and roleplay: warrior-princess, s&m freak, chastity-belted virgin. Overlapping the controversial facets of cultural association, 
        Mutu’s figure beacons as a subversive dominatrix, shrewdly co-opting the rules of hierarchy, power, and manipulation.',
        'Mixed media and collage',
        '16.5 x 12.7 cm',
        2006
    )
INSERT INTO
    users (name, email, password)
VALUES
    (
        'Brooke Colosi',
        'b@gmail.com',
        'ShadowOnyx'
    )
INSERT INTO
    comments (user_id, img_id, comment)
VALUES
    (
        1,
        1,
        'Wangcheti Mutu is an artist that has influenced my work greatly. Thank you for sharing.'
    )

-- Info provided by Saatchi Gallery: https://www.saatchigallery.com/artists/wangechi_mutu.html
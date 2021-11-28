//Here we are scoping the routes out

const { Restaurant, Menu, MenuItem } = require('../sequelize-connect');
const express = require('express');


 //creates a new instance of a router object
 const router = express.Router();

router.post('/restaurants', async (req, res) => {
    try {
        //create a row in the database using sequelize create method
        const restaurant = await Restaurant.create(req.body);

        //201 created a resource
        res.status(201).send(restaurant);
    } catch(e) {
        res.status(400).send(e.message);
    };
});

router.get('/restaurants', async (req, res) => {
    try {
        let restaurants;
        /*
        order keyword: the first element is the column/function to order by which is required in the path/url if order is added to findAll method 
        (thus why it's in an if statement), the second is the direction, which is optional in the path/url (thus why it's in a ternary operator, as it can be an empty array).
        limit keyword: is optional in the path/url if limit is added to findAll method, so we can keep it in our findAll method regardless.
        attributes keyword: is also optional and lists the attributes that I want to select
        https://sequelize.org/master/class/lib/model.js~Model.html#static-method-findAll
        */
        
        if (req.query.sort_by) {
            restaurants = await Restaurant.findAll({order : [[req.query.sort_by, ...(req.query.order_by ? [req.query.order_by] : [])]], attributes: ['id', 'name'], limit: req.query.limit});
        } else {
            restaurants = await Restaurant.findAll({attributes: ['id', 'name'], limit: req.query.limit}); 
        }
        //201 created a resource
        await res.status(201).send(restaurants);
    } catch(e) {
        res.status(400).send(e.message);
    };
});

//what comes after a colon (':') in the path/url is a variable that can accessed through req.params, which we can use to specify a row of our database.
router.get('/restaurants/:blah', async (req, res) => {
    try {
        const restaurantId = req.params.blah;
        const restaurantInfo = await Restaurant.findOne({where: {id: restaurantId}, attributes: ['id', 'name']});
        res.status(201).send(restaurantInfo);
    } catch(e) {
        res.status(400).send(e.message);
    };
});

router.put('/restaurants/:id', async (req, res) => {
    try {
        const restaurantId = req.params.id;
        await Restaurant.update({name: 'Updated restaurant'}, {where: {id: restaurantId}});
        res.status(201).send(`updated restaurant with ID ${restaurantId}`);
    } catch(e) {
        res.status(400).send(e.message);
    };
});

router.delete('/restaurants/:id', async (req, res) => {
    try {
        const restaurantId = req.params.id;
        const restaurantToDelete = await Restaurant.destroy({where: {id: restaurantId}});
        res.status(201).send('deleled restaurant with ID ' + restaurantId);
    } catch(e) {
        res.status(400).send(e.message);
    };
});

router.post('/restaurants/:restaurant_id/menus', async (req, res) => {
    try {
        const restaurant = await Restaurant.findOne({where: {id: req.params.restaurant_id}});
        if (restaurant) {
            const menu = await Menu.create(req.body);
            await restaurant.addMenu(menu);
            res.status(201).send(menu);
        } else {
            res.status(400).send(`${req.params.restaurant_id} does not exist`)
        }
    } catch(error) {
        res.status(400).send(error.message);
    }
});

router.get('/restaurants/:restaurant_id/menus', async (req, res) => {
    try {
        let menus;
        if (req.query.sort_by) {
            menus = await Menu.findAll({where: {RestaurantId: req.params.restaurant_id}, order : [[req.query.sort_by, ...(req.query.order_by ? [req.query.order_by] : [])]], attributes: ['id', 'title', 'RestaurantId'], limit: req.query.limit});
        } else {
            menus = await Menu.findAll({where: {RestaurantId: req.params.restaurant_id}, limit: req.query.limit, attributes: ['id', 'title', 'RestaurantId']});
        }
        res.status(201).send(menus);
    } catch(error) {
        res.status(400).send(error.message);
    };
});

router.get('/restaurants/:restaurant_id/menus/:menu_id', async (req, res) => {
    try {
        const menuToGet = await Menu.findOne({where: {RestaurantId: req.params.restaurant_id, id:req.params.menu_id}, attributes: {id, title, RestaurantId}});
        res.status(201).send(menuToGet);
    } catch(e) {
        res.status(400).send(e.message);
    }
});

router.put('/restaurants/:restaurant_id/menus/:menu_id', async (req, res) => {
    try {
        const menuId = req.params.menu_id;
        await Menu.update({title: req.body.title}, {where: {RestaurantId: req.params.restaurant_id, id: menuId}});
        res.status(201).send(`Updated restaurant with ID ${menuId}`);
    } catch(error) {
        res.status(400).send(e.message);       
    };
});

router.delete('/restaurants/:restaurant_id/menus/:menu_id', async (req, res) => {
    try {
        const menuId = req.params.menu_id;
        await Menu.destroy({where: {RestaurantId: req.params.restaurant_id, id: menuId}});
        res.status(201).send(`Deleted menu whose ID was ${menuId}`);
    } catch (error) {
        res.status(400).send(error.message);
    };
});

router.post('/menus/:menu_id/menu_items', async (req, res) => {
    try {
        const menu = await Menu.findOne({where: {id: req.params.menu_id}});
        const menuItem = await MenuItem.create(req.body);
        await menu.addMenuItem(menuItem);
        res.status(201).send(`Menu Item ${menuItem.name} created`);
    } catch (error) {
        res.status(400).send(error.message);
    };
});

router.get('/menus/:menu_id/menu_items', async (req, res) => {
    try {
        let menuItems;
        if (req.query.sort_by) {
            menuItems = await MenuItem.findAll({where: {menuId: req.params.menu_id}, order : [[req.query.sort_by, ...(req.query.order_by ? [req.query.order_by] : [])]], attributes: ['id', 'name', 'price', 'MenuId'], limit: req.query.limit});
        } else {
            menuItems = await MenuItem.findAll({where: {menuId: req.params.menu_id}, limit: req.query.limit, attributes: ['id', 'name', 'price', 'MenuId']});
        }
        res.status(201).send(menuItems);
    } catch (error) {
        res.status(400).send(error.message);
    };
});

router.get('/menus/:menu_id/menu_items/:menu_item_id', async (req, res) => {
    try {
        const menuItemId = req.params.menu_item_id;
        const menuItemToRead = await MenuItem.findOne({where: {MenuId: req.params.menu_id, id: menuItemId}, attributes: ['id', 'name', 'price', 'MenuId']});
        res.status(201).send(menuItemToRead);
    } catch (error) {
        res.status(400).send(error.message);
    };
});

router.put('/menus/:menu_id/menu_items/:menu_item_id', async (req, res) => {
    try {
        const menuItemId = req.params.menu_item_id;
        await MenuItem.update({name: req.body.name, price: req.body.price}, {where: {MenuId: req.params.menu_id, id: menuItemId}});
        res.status(201).send(`Menu item with ID ${menuItemId} updated to ${req.body.name}, at price ${req.body.price}`);
    } catch (error) {
        res.status(400).send(error.message);
    };
});

router.delete('/menus/:menu_id/menu_items/:menu_item_id', async (req, res) => {
    try {
        const menuItemId = req.params.menu_item_id;
        await MenuItem.destroy({where: {MenuId: req.params.menu_id, id: menuItemId}});
        res.status(201).send(`Menu item with ID ${menuItemId} deleted`);
    } catch (error) {
        res.status(400).send(error.message);
    };
});

module.exports = router;
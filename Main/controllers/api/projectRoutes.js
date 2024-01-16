const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');




// This route will render a page with the form when '/new-project' is accessed
router.get('project', (req, res) => {
  // The logic here would usually involve rendering a view that contains the form.
  // For example, if you're using a template engine like Handlebars:
  res.render('project', {
    // You can pass data to your template if needed, like:
    project: {
      name: '', // Default or previously saved value
      description: '' // Default or previously saved value
    }
  });
});
router.post('/project', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
